<template>
  <div class="ly-header">
    <div class="part-left">
      <p>{{ _getUserInfo.sellerName }}，欢迎您使用云配商家后台系统!</p>
    </div>
    <div class="part-right">
      <el-dropdown
        v-if="isLogin"
      >
        <span class="el-dropdown-link">
          <i class="el-icon-user-solid el-icon--left" />
          {{ _getUserInfo.sellerId }}
          <i class="el-icon-caret-bottom el-icon--right" />
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="logoutHandler">
            <i class="el-icon-switch-button el-icon--left" /> 退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'LyHeader',
  data () {
    return {
      icon: require('@/assets/images/user.png'),
      isLogin: false
    }
  },
  computed: {
    ...mapGetters([
      '_getUserInfo'
    ])
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    ...mapActions([
      '_ationsUserInfo'
    ]),   
    getUserInfo() {
      this.$ajax({
        url: '/brilliant/common/getUserInfo',
        showLoading: false,
        success: res => {
          if (res.success) {
            this.isLogin = true
            this._ationsUserInfo(res.data)
          }
        }
      })
    },
    logoutHandler () {
      this.$jsonp('https://zs.360cec.com/idp/logout', {}).then( () => {
        window.location.href = '/xxx/logout'
      })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
<style lang="scss">
.ly-header {
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
  display: flex;
  padding: 0 20px 0 60px;
  flex-shrink: 0;
  justify-content:space-between;
  align-items: center;
  .part-left{
    padding-left:12px;
    line-height: 30px;
    border-left:1px solid #eaedf4;
    color: #8098b0;
    font-size:12px;
  }
  .part-right{
    display: flex;
    align-items: center;
    height: 100%;
    .el-dropdown{
      display: flex;
      height:100%;
      align-items: center;
      padding-left:12px;
      border-left:1px solid #eaedf4;
      color: #8098b0;
      cursor: pointer;
      font-size:13px;
      .el-dropdown-link {
        display: flex;
        align-items: center;
        .el-icon-user-solid{
          border:1px solid #8098b0;
          padding:1px;
          border-radius: 50%;
        }
      }
    }
  }
}
.el-dropdown-menu{
  transform: translateY(-14px);
  padding:0;
  line-height: 40px;
  .el-dropdown-menu__item{
    color: #8098b0;
    &:hover{
      color: #ffffff;
      background-color: #02aadb;
    }
  }
  .popper__arrow{
    display:none;
  }
}
</style>
