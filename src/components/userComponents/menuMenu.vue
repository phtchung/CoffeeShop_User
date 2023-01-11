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
            categoryType: 0,
            categoryName: "tat-ca",
            currentPath: this.$route.path,
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

        // bo het dau trong tieng Viet
        removeVietnameseTones(str) {
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
            // Some system encode vietnamese combining accent as individual utf-8 characters
            // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
            str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
            str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
            return str;
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
        getNameByIDCatgory(id) {
            if(id == 0)
              return "menu"
            for (let index in this.categories) {
                const category = this.categories[index]
                if (category.id == id) {
                    return this.removeVietnameseTones(category.name).replaceAll(' ', '-').toLowerCase()
                }
            }
            return 0
        },
        getIDByPath(path){
          console.log("input path: ", path)
          for (let index in this.categories) {
                const category = this.categories[index]
                console.log(this.removeVietnameseTones(category.name).replaceAll(' ', '-').toLowerCase())
                if (this.removeVietnameseTones(category.name).replaceAll(' ', '-').toLowerCase() == path) {
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
            // console.log(this.categories)
            for (let index in this.categories) {
                // console.log("=====Singe category=====")
                const category = this.categories[index]
                // console.log(category.name)
                if (category.parent_id == 0) {
                    // // console.log("1")
                    tmp_category.name = category.name
                    tmp_category.id = category.id
                    for (const index2 in this.categories) {
                        const category_child = this.categories[index2]
                        // console.log("Bat dau quet:")
                        // console.log(category_child.name)
                        if (category_child.parent_id == category.id) {
                            // console.log("Child:", category_child.name)
                            child_category.name = category_child.name
                            child_category.id = category_child.id
                            // console.log("Children truoc do:", tmp_category.children[0], tmp_category.children[1])
                            // console.log("Da them:", child_category.name)
                            tmp_category.children.push({
                                name: category_child.name,
                                id: category_child.id,
                                file: "dots"
                            })
                            // tmp_category.children = this.appendObjTo(tmp_category.children, child_category);
                            // console.log("Children hien tai:", tmp_category.children[0], tmp_category.children[1])
                            // console.log("tmp hien tai:")
                            // console.log(tmp_category)
                            // console.log(tmp_category.children[0], tmp_category.children[1])
                        }
                    }
                    if (tmp_category.children.length == 0) {
                        tmp_category.children.push({
                            name: tmp_category.name,
                            id: tmp_category.id,
                            file: "dots"
                        })
                    }
                    // // console.log("3")
                    this.menuItems.push({
                        name: tmp_category.name,
                        id: tmp_category.id,
                        children: tmp_category.children,
                    })
                    // this.menuItems = this.appendObjTo(this.menuItems, tmp_category)
                    // console.log("<><> menuItems luc nay:")
                    // console.log(this.menuItems)
                    // // console.log(this.menuItems[1].children[0], this.menuItems.children[1])
                    tmp_category.children = []
                    // // console.log(this.menuItems[1].children[0], this.menuItems.children[1])
                }
            }
            // console.log("REAL MENUITEMS")
            // console.log(this.menuItems)
        },

        // get all categories from database => this.categories
        getCategories() {
            axios
                .get("http://127.0.0.1:8000/api/admin/category/index")
                .then((response) => {
                    // console.log("START get categories\n");
                    // // console.log(response);
                    // // console.log("END\n");
                    this.categories = response.data.Categories;
                    // console.log(this.categories)
                    // console.log("DONE CATEGORIES with length:", this.categories.length);
                    this.makeMenuItem();
                    this.handlePath()
                    // console.log("END\n");
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
                    // console.log("ITEMS in function:")
                    // console.log(this.items)
                })
                .catch((error) => {
                    console.log(error.response);
                });
            // const response = await abc();
        },

        getItemsbyProduct() {
            axios
                .post("http://127.0.0.1:8000/api/admin/product/indexByCategoryId", {
                    category_id: this.categoryType
                })
                .then((response) => {
                    this.items = response.data.products;
                    // console.log(response);
                })
                .catch((error) => {
                    // console.log("Start\n");
                    console.log(error.response)
                    // console.log("END\n");
                });
            // localStorage.setItem("items", this.items)
        },
        onUpdate(selection) {
            console.log(selection)
        },

        handlePath() {
          this.categoryType = this.getIDByPath(this.currentPath.replace("/collections/", ""))
        }

    },
    watch: {
        selection(newValue) {
            this.onUpdate(newValue)
        },

        children_type(newArr, oldArr) {
            let clickName = []
            if (oldArr.length > newArr.length)
                clickName = oldArr.filter(x => !newArr.includes(x))
            else
                clickName = newArr.filter(x => !oldArr.includes(x))
            console.log(clickName)
            this.categoryType = this.getIDByNameCatgory(clickName)
            console.log(this.categoryType)
        },

        parent_type(newArr, oldArr) {
            let clickName = []
            if (oldArr.length > newArr.length)
                clickName = oldArr.filter(x => !newArr.includes(x))
            else
                clickName = newArr.filter(x => !oldArr.includes(x))
            console.log(clickName)
            this.categoryType = this.getIDByNameCatgory(clickName)
            console.log(this.categoryType)
        },

        categoryType() {
            if (this.categoryType == 0) {
                this.getItems()
            } else
                this.getItemsbyProduct()
            this.categoryName = this.getNameByIDCatgory(this.categoryType)
            console.log(this.categoryName)
            this.$router.push({
                path: `/${this.categoryName}`,
                name: "menuMenu",
                params: {category_name: `${this.categoryName}`, category_id: `${this.categoryType}` }
            })
        },

        '$route.params' (to, from) {
        console.log("To: ",to)
        console.log("From: ", from)
        this.categoryType = this.getIDByPath(to.category_name)
      }
    },
    created() {
        this.getItems();
        console.log("Categories:");
        this.getCategories();
        console.log("path:", this.currentPath)
        console.log("Category Type: ",this.categoryType)
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
