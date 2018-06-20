<template>
<ion-app>
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>
      Vue Capacitor
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  The world is your oyster.
  <p>If you get lost, the <a target="_blank" href="https://ionicframework.com/docs">docs</a> will be your guide.</p>
<ion-button @click="goToAbout" full>Go to About</ion-button>
<ion-button @click="showDialogAlert" full>Show Alert Box</ion-button>

</ion-content>
</ion-app>

</template>

<script>
import { Plugins } from '@capacitor/core';


export default {
  name: 'Home',
  methods: {
    goToAbout () {
      this.$router.push('about')
    },
    async showDialogAlert(){
      await Plugins.Modals.alert({
          title: 'Alert',
          message: 'This is an example alert box'
      });
    }
  }
}
</script>

