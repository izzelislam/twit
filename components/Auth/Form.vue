<script setup>
  import useAuth from '~/composable/useAuth';

  const data = reactive({
    email: '',
    password: '',
    loading: false
  });

  async function handleLogin() {
    const {login} = useAuth();

    data.loading = true;
    try {
      await login({email: data.email, password: data.password});
    } catch (error) {
      console.log(error);
    }finally{
      data.loading = false 
    }
  }

</script>

<template>
  <div>
    <div class="pt-5 space-y-6">
        <UIInput v-model="data.email" label="Email" placeholder="email"/>

        <UIInput v-model="data.password" label="Password" placeholder="password" type="password"/>

        <div>
          <button @click="handleLogin()">Login</button>
        </div>
    </div>
  </div>  
</template>
