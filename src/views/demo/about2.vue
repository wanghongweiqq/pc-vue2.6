<template>
  <div class="pg-about">
    <cp-crumbs :title-list="titleList" />

    <h1>Welcome to Your Vue.js App V=3.8.4</h1>
    <p>222你好！{{ _getUserInfo.userName }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CpCrumbs from '@/components/crumbs/'

export default {
  components: {
    CpCrumbs
  },
  data() {
    return {
      showImg: false,
      imageData: [],
      imageIndex: 0,

      limitMax: 9999900,
      limitMin: 100,
      titleList: [
        {
          title: '云采管理',
          routerName: 'CloudIndex'
        },
        {
          title: '云采客户'
        }
      ],
      searchText: null,
      searchData: false,
      //查询条件
      queryCondition: {
        searchId: null,
        cloudStatus: null,
      },
      //云采状态列表
      listStatus: [
        {
          id: null,
          status: '全部'
        },
        {
          id: 0,
          status: '开启'
        },
        {
          id: 1,
          status: '停止'
        }
      ],
      //认证状态列表
      listAuthStatus: [
        {
          id: null,
          status: '全部'
        },
        {
          id: 1,
          status: '已认证'
        },
        {
          id: 2,
          status: '未认证'
        }
      ],
      queryList: [],
      currentPage: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40],
      count: 0, //查询得到的所有条
      isLoading: false,
      showPopAdd: false,
      showPopDetail: false,
      showPopLimit: false,
      addSearchText: null,
      add: {
        customerId: null,
        searchName: null,
        searchMobile: null,
        limit: null,
      },
      checkArray: {
        customerId: '请选择客户',
        limit: '设置额度不能为空',
      },
      customerName: null,
      customerId: null,
      currentLimit: null,//当前额度
      currentLimitFormat: null,//当前额度格式化的数据
      customerLimit: null,//修改后的额度
      customerDetail: null,
    }
  },  
  computed: {
    ...mapGetters([
      '_getUserInfo'
    ])
  },
  mounted() {
    console.log(2)
  }
}
</script>