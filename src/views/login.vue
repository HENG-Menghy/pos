<script>
  export default {
    data() {
      return {
        password: '',
        isPasswordVisible: false
      }
    },
    computed: {
      passwordFieldType() {
        return this.isPasswordVisible ? 'text' : 'password'
      }
    },
    methods: {
      toggleChange() {
        this.isPasswordVisible = !this.isPasswordVisible
      }
    }
  }
</script>
<template>
  <div class="w-[30%] h-screen rounded-lg mx-auto my-2 py-12 px-4 border-colorGray border-2 bg-[url('../assets/art-login.png')] bg-[length:100%_62%] bg-no-repeat">
    <div class="flex flex-col items-center justify-center gap-8">
      <div class="image size-24">
        <img src="../assets/logo.png" alt="Cam Cyber POS logo">
      </div>
      <div class="text-header -my-4">
        <div class="text-colorBlue text-3xl"> ប្រព័ន្ធគ្រប់គ្រងការលក់ </div>
        <div class="text-colorGreen text-2xl font-semibold mt-1"> POS Management System </div>
      </div>
      <div class="text-2xl text-colorBlack font-semibold my-10">ចូលគណនីរបស់អ្នក</div>
      <div class="w-full px-1 flex flex-col space-y-8">
        <div class="telephone-input relative text-colorGray">
          <div class="z-50 bg-colorWhite absolute -top-[13px] left-4 px-2">
            <span class="text-xs">លេខទូរស័ព្ទ</span>
            <span class="text-[8px] font-bold ml-[2px] absolute top-[5px]">*</span>
          </div>
          <input type="tel" placeholder="Enter your phone number"
            class="w-full outline-none border-[1px] border-borderColor rounded-lg p-3 placeholder:text-md bg-transparent"
          >
          <svg class="absolute right-[14px] top-3 size-6"
            width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18H2V4H12M12 0H2C0.89 0 0 0.89 0 2V20C0 20.5304 0.210714 21.0391 0.585786 21.4142C0.960859 21.7893 1.46957 22 2 22H12C12.5304 22 13.0391 21.7893 13.4142 21.4142C13.7893 21.0391 14 20.5304 14 20V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="#64748B"/>
          </svg>
        </div>
        <div class="password-input relative text-colorGray">
          <div class="z-50 bg-colorWhite absolute -top-3 left-4 px-2">
            <span class="text-xs">លេខសំងាត់</span>
            <span class="text-[8px] font-bold ml-[2px] absolute top-[5px]">*</span>
          </div>
          <input :type="passwordFieldType" v-model="password" placeholder="Enter your password"
            class="w-full outline-none border-[1px] border-borderColor rounded-lg p-3 placeholder:text-md bg-transparent"
          >
          <font-awesome 
            :icon="isPasswordVisible? ['fas', 'eye-slash'] : ['fas', 'eye']"
            @click="toggleChange"
            class="absolute right-[14px] top-[14px] size-6"
          />
        </div>
      </div>
      <div class="w-full">
        <router-link to="/dashboard">
          <button class="w-full text-colorWhite text-base text-center py-3 bg-colorGreen hover:bg-[rgb(61,148,133)] hover:cursor-pointer rounded-lg mt-4">
              ចូលប្រព័ន្ធ
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

