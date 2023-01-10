<template>
<v-container>
    <!-- <v-row>
      <v-col cols="12" sm="12" md="6" lg="3" v-for="item in items" :key="item.name">
          <Item :image_url="item.image_url" :name="item.name" :description="item.description" :price="item.price"/>
      </v-col>
  </v-row> -->
    <mainHeader>
    </mainHeader>
    <v-row>
        <v-col cols="12" md="4" lg="3" style="margin: 24px 0">
            <v-treeview v-model="selection" :open="initiallyOpen" :items="menuItems" activatable item-key="name" open-on-click transition @input="categoryType = items.id" @update:open="clickParent" @update:active="clickParentActive">
                <template v-slot:prepend="{ item, open }">
                    <v-icon v-if="!item.file">
                        {{ open ? "mdi-coffee-to-go-outline" : "" }}
                    </v-icon>
                    <v-icon v-else>
                        {{ files[item.file] }}
                    </v-icon>

                </template>
            </v-treeview>
        </v-col>

        <v-col cols="12" sm="12" md="8" lg="9" style="margin: 24px 0">
            <v-row class="menu_bar">
                <v-col cols="12" sm="12" md="6" lg="4" v-for="item in items" :key="item.name">
                    <!-- <v-card class="mx-auto" max-width="344" color="transparent">
          <v-card-actions>
            <BtnNew>
            </BtnNew>
          </v-card-actions>
        </v-card> -->
                    <Item_User :image_url="item.image_url" :name="item.name" :description="item.description" :price="item.price" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from "axios";
export default {
    name: "menuCategory",
    props: {
        menuType: String,
    },

    //  set up data base on menuType from backend
    // this data below is manually set up, neet to get from backend when have a api
    data() {
        return {
            categoryType: 1,
            initiallyOpen: ["public"],
            selection: [],
            files: {
                dots: "mdi-circle-small",
            },
            parent_type: [],
            children_type: [],
            // menuItems: [
            //   {
            //     name: "Tất cả",
            //     id: '0',
            //   },
            //   {
            //     name: "Cafe",
            //     id : '1',
            //     children: [
            //       {
            //         name: "Cafe Việt Nam",
            //         file: "dots",
            //         id :'4',
            //       },
            //       {
            //         name: "Cafe máy",
            //         file: "dots",
            //         id :'5',
            //       },
            //       {
            //         name: "Cold Brew",
            //         file: "dots",
            //         id :'10',
            //       },
            //     ],
            //   },
            //   {
            //     name: "CloudFee",
            //     id :'3',
            //     children: [
            //       {
            //         name: "CloudFee",
            //         file: "dots",
            //         id:'7',
            //       },
            //     ],
            //   },
            //   {
            //     name: "Trà",
            //     id:'8',
            //     children: [
            //       {
            //         name: "Trà trái cây",
            //         file: "dots",
            //         id:'9',
            //       },
            //       {
            //         name: "Trà sữa Machiato",
            //         file: "dots",
            //         id:'11',
            //       },
            //     ],
            //   },
            // ],
            menuItems: [],
            categories: [],
            items: [],
        };
    },
    methods: {
        clickParent(e) {
            // ignore initial open
            this.categoryType = 3

            console.log('toggle arrow clicked', e)
            this.parent_type = e
        },

        clickParentActive(e) {
            console.log('active:')
            console.log(e)
            this.children_type = e
        },

        // Get id of category by name of that category in this.categories
        getIDByNameCatgory(name) {
            for (let index in this.categories) {
                const category = this.categories[index]
                if (category.name == name) {
                    return category.id
                }
            }
            return 0
        },
        appendObjTo(thatArray, newObj) {
            const frozenObj = Object.freeze(newObj);
            return Object.freeze(thatArray.concat(frozenObj));
        },

        // Create this.menuItem from this.categories (load from database)
        makeMenuItem() {
            this.menuItems.push({
                name: "Tất cả",
                id: '0',
            })
            const tmp_category = {
                name: "",
                id: 0,
                children: [],
            }
            const child_category = {
                name: "",
                id: 0,
                file: "dots",
            }
            console.log(this.categories)
            for (let index in this.categories) {
                console.log("=====Singe category=====")
                const category = this.categories[index]
                console.log(category.name)
                if (category.parent_id == 0) {
                    // console.log("1")
                    tmp_category.name = category.name
                    tmp_category.id = category.id
                    for (const index2 in this.categories) {
                        const category_child = this.categories[index2]
                        console.log("Bat dau quet:")
                        console.log(category_child.name)
                        if (category_child.parent_id == category.id) {
                            console.log("Child:", category_child.name)
                            child_category.name = category_child.name
                            child_category.id = category_child.id
                            console.log("Children truoc do:", tmp_category.children[0], tmp_category.children[1])
                            console.log("Da them:", child_category.name)
                            tmp_category.children.push({
                                name: category_child.name,
                                id: category_child.id,
                                file: "dots"
                            })
                            // tmp_category.children = this.appendObjTo(tmp_category.children, child_category);
                            console.log("Children hien tai:", tmp_category.children[0], tmp_category.children[1])
                            console.log("tmp hien tai:")
                            console.log(tmp_category)
                            console.log(tmp_category.children[0], tmp_category.children[1])
                        }
                    }
                    if (tmp_category.children.length == 0) {
                        tmp_category.children.push({
                            name: tmp_category.name,
                            id: tmp_category.id,
                            file: "dots"
                        })
                    }
                    // console.log("3")
                    this.menuItems.push({
                        name: tmp_category.name,
                        id: tmp_category.id,
                        children: tmp_category.children,
                    })
                    // this.menuItems = this.appendObjTo(this.menuItems, tmp_category)
                    console.log("<><> menuItems luc nay:")
                    console.log(this.menuItems)
                    // console.log(this.menuItems[1].children[0], this.menuItems.children[1])
                    tmp_category.children = []
                    // console.log(this.menuItems[1].children[0], this.menuItems.children[1])
                }
            }
            console.log("REAL MENUITEMS")
            console.log(this.menuItems)
        },

        // get all categories from database => this.categories
        getCategories() {
            axios
                .get("http://127.0.0.1:8000/api/admin/category/index")
                .then((response) => {
                    console.log("START get categories\n");
                    // console.log(response);
                    // console.log("END\n");
                    this.categories = response.data.Categories;
                    console.log(this.categories)
                    console.log("DONE CATEGORIES with length:", this.categories.length);
                    this.makeMenuItem();
                    console.log("END\n");
                })
                .catch((error) => {
                    console.log(error.response);
                });
            // const response = await abc();
        },

        // get all items from database => this.items
        getItems() {
            axios
                .get("http://127.0.0.1:8000/api/admin/product/index")
                .then((response) => {
                    // console.log("START\n");
                    // console.log(response);
                    // console.log("END\n");
                    this.items = response.data.products;
                    console.log("ITEMS in function:")
                    console.log(this.items)
                })
                .catch((error) => {
                    console.log(error.response);
                });
            // const response = await abc();
        },

        getItemsbyProduct(){
          axios
          .post("http://127.0.0.1:8000/api/admin/product/indexByCategoryId",
              {
                category_id: this.categoryType
              }
          )
          .then((response) => {
            this.items = response.data.products;
            // console.log(response);
          })
          .catch((error) => {
            console.log("Start\n");
            console.log(error.response)
            console.log("END\n");
          });
      // localStorage.setItem("items", this.items)
        },
        onUpdate(selection) {
            console.log(selection)
        },

    },
    watch: {
        selection(newValue) {
            this.onUpdate(newValue)
        },

        children_type(){
          this.categoryType = this.getIDByNameCatgory(this.children_type[0])
          console.log(this.categoryType)
        },

        parent_type(newArr, oldArr){
          let clickName = []
          if(oldArr.length > newArr.length)
            clickName = oldArr.filter(x => !newArr.includes(x))
          else
            clickName = newArr.filter(x => !oldArr.includes(x))
          console.log(clickName)
          this.categoryType = this.getIDByNameCatgory(clickName)
          console.log(this.categoryType)
        },

        categoryType(){
          if(this.categoryType == 0)
          {
            this.getItems()
          }
          else
            this.getItemsbyProduct()
        }
    },
    created() {
        console.log("START CREATED with items:");
        this.getItems();
        console.log(this.items)
        console.log("Categories:");
        this.getCategories();
        console.log(this.categories);

        console.log("DONE MENUITEMS")
        console.log("MAKE MENU ITEMS")
        console.log(this.menuItems)
    },
    components: {
        Item_User: () => import("@/components/Item_User"),
        mainHeader: () => import("@/layouts/Header/mainHeader")
        // BtnNew: () => import("@/components/vuetifyComponents/BtnNew")
    },

};
</script>

<style scoped>
.menu_bar::after {
    content: "";
    position: absolute;
    width: 2px;
    top: 12px;
    background: #00000026;
}
</style>
