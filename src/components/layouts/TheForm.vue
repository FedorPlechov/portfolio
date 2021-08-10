<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="submit" :class="{error_form: !isConnection}">
      <input v-model.trim="name.value" name="Name" placeholder="Name" type="text" :class="{error:name.error}" @focus="clearError(name)"/>
      <span v-if="name.error">{{ name.error }}</span>
      <input v-model.trim="email.value" name="email" placeholder="Enter email" type="email" :class="{error:email.error}" @focus="clearError(email)"/>
      <span v-if="email.error">{{ email.error }}</span>
      <textarea id="offer" v-model.trim="message.value" name="message" placeholder="Your Message" rows="5" :class="{error:message.error}" @focus="clearError(message)"></textarea>
      <span v-if="message.error">{{ message.error }}</span>
      <button class="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TheForm",
  data() {
    return {
      name: {
        value: '',
        error: false
      },
      email: {
        value: '',
        error: false
      },
      message: {
        value: '',
        error: false
      },
      isValidating: true,
      isConnection: true,
    }
  },
  computed: {
    arrayOfObjects() {
      return [this.name, this.email, this.message]
    }
  },
  methods: {
    validationFields(arr) {
      arr.forEach(el => {
        if (el.value === '') {
          el.error = 'This field is require'
          this.isValidating = false;
        }
      })
    },
    validationEmail(payload) {
      if (!payload.value.includes('@')) {
        payload.error = 'Email was entered incorrect, please try again'
        this.isValidating = false;
      }
    },
    clearErrors(arr) {
      arr.forEach(el => el.error = false)
    },
    clearError(payload) {
      payload.error = false;
    },

    async fetchData(){
      const data = `Name: ${this.name.value} \n email: ${this.email.value} \n message: ${this.message.value}`;
      const token = "1915812966:AAFovpLW4e72aBlnfFuhfSKgUYxejc9mp5o";
      const chat_id = '735604317';
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        body: JSON.stringify({'chat_id': chat_id, 'text': data}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return (response.json());
    },
    submit() {
      this.clearErrors(this.arrayOfObjects)
      this.isValidating = true;
      this.isConnection = true;
      this.validationFields(this.arrayOfObjects)
      this.validationEmail(this.email)

      if (this.isValidating) {
        try{
          this.fetchData()
        }catch (err) {
          this.isConnection = false;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: -2px;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(37, 41, 52);
}

.form {
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  padding-bottom: 70px;
  transition: all 0.5s ease;

  input, textarea {
    font-size: 1.2rem;
    margin: 2px 0;
    padding: 5px 10px;
    background: rgb(30, 36, 44);
    border: none;
    color:white;

  }

  .submit {
    align-self: flex-end;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    background-color: rgb(37, 41, 52);
    padding: 10px 20px;
    transition: all 0.4s ease;
    cursor: pointer;

    &:hover, :active {
      background: #00A1A7;
      border: 1px solid #00A1A7;
    }
  }
}
span {
  color: red;
  padding: 2px 0 12px 0;
  animation: move-right 0.5s ease;
}

.error {
  &:placeholder-shown {
    border: 1px solid red;
  }
}
.error_form {
  border: 2px solid red;
  &:after{
    content: 'Connection is failed';
    display: inline-block;
    position: relative;
    bottom:15px;
    text-align: center;
    color: red;
    animation: move-right 0.5s ease;

  }
}
@keyframes move-right {
 from {
   transform: translateX(-100%);
 }
  to {
    transform: translateX(0);
  }
}
</style>
