<template>
  <div class="asideBox">
    <aside>
      <ul class="asideMenu">
        <li v-for="(item,index) in menuList">
          <div
            class="oneMenu"
            @click="showToggle(item,index)"
          >
            <!-- <img v-bind:src="item.// imgUrl" /> -->
            <span>{{item.name}}</span>
          </div>
          <ul v-show="item.isSubShow">
            <li v-for="subItem in item.subItems">
              <div class="oneMenuChild">{{subItem.name}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: "字符录入",
          // imgUrl: require("../assets/images/icon-character.png"),
          isSubShow: true,
          subItems: [
            {
              name: "字符录入"
            },
            {
              name: "白话文录入"
            },
            {
              name: "文言文录入"
            },
            {
              name: "小写数字录入"
            }
          ]
        },
        {
          name: "票据数据录入",
          // imgUrl: require("../assets/images/icon-bill.png"),
          isSubShow: false,
          subItems: [
            {
              name: "票据录入"
            },
            {
              name: "翻打传票"
            }
          ]
        },
        {
          name: "交易码录入",
          // imgUrl: require("../assets/images/icon-transaction.png"),
          isSubShow: false,
          subItems: [
            {
              name: "交易码录入"
            },
            {
              name: "交易名称录入"
            }
          ]
        },
        {
          name: "操作码录入",
          // imgUrl: require("../assets/images/icon-operation.png"),
          isSubShow: false,
          subItems: [
            {
              name: "操作码录入"
            },
            {
              name: "操作名称录入"
            }
          ]
        },
        // {
        //   name: "票据学习",
        //   // imgUrl: require("../assets/images/icon-billearn.png"),
        //   isSubShow: false,
        //   subItems: []
        // },
        // {
        //   name: "内部凭证学习",
        //   // imgUrl: require("../assets/images/icon-voucher.png"),
        //   isSubShow: false,
        //   subItems: []
        // },
        // {
        //   name: "现金管理学习",
        //   // imgUrl: require("../assets/images/icon-cash.png"),
        //   isSubShow: false,
        //   subItems: []
        // }
      ]
    };
  },
  methods: {
    // 点击展开折叠菜单事件
    showToggle(item, ind) {
      // 若想只能打开一个菜单，思路：遍历所有菜单，在把当前点击的item的折叠属性置非。如下foreach设置。
      this.menuList.forEach(i => {
        // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
        if (i.isSubShow !== this.menuList[ind].isSubShow) {
          i.isSubShow = false;
        }
      });
      // 如果不遍历，则只需要下面的代码即可，操作互不影响。
      item.isSubShow = !item.isSubShow;
    }
  }
};
</script>

<style>
.asideMenu {
  padding-left: 15px;

}
</style>

<style lang="scss" scoped>
  $menuBackColor:#f1f1f1;
  $menuListH2:#8fbfef;
  .asideBox{
    height: 100%;
    width: 300px;
    aside{
      background: #f1f1f1;
      height: 100%;
      .asideMenu{
        .oneMenu{
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          font-weight: normal;
          color: #ffffff;
          background: #8fbfef url("../assets/images/icon-open.png") no-repeat 280px center;
          
          border-bottom: 1px solid #669cd9;
          img{
            width: 20px;
            height: 20px;
            margin: 15px 16px 15px 20px;
            vertical-align: top;
          }
        }
        .oneMenuChild{
          padding: 0 20px 0 60px;
          height: 40px;
          line-height: 40px;
          background: $menuBackColor;
          border-bottom: 1px solid #ffffff;
          color: #454343;
          font-size: 18px;
        }
      }
    }
  }
 
</style>



