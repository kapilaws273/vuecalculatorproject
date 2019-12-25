<template>
  <div class="main__wrapper">
    <div class="hello">
      <div class="demo-header">
        <h1>{{ msg }}</h1>
      </div>
      <label class="el-form-item__label">
        Frequency
        <select v-model="selected" class="el-select">
          <option disabled value>Please select one</option>
          <option>monthly</option>
          <option>yearly</option>
        </select>
      </label>
      <!-- <span>Selected: {{ selected }}</span> -->

      <label class="el-form-item__label">
        Interest :
        <input v-model="interest" placeholder="Interest" />
      </label>
      <label class="el-form-item__label">
        Amount :
        <input v-model="amount" placeholder="Amount" />
      </label>

      <input tye="button" value="Calculate" @click="checkForm" class="el-form-item" />
    </div>
    <div v-for="res in result" :key="res">
      <ul>
        <li>Result:</li>
        <li>{{ res }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
let resultVal = "";
export default {
  name: "Ppf",
  props: {
    msg: String
  },
  data() {
    return {
      selected: "",
      result: resultVal
    };
  },
  methods: {
    checkForm() {
      if (!this.selected) {
        alert("select frequncy");
      }
      if (this.selected && this.interest && this.amount) this.calculate();
      //return true;
    },
    calculate() {
      this.result = [];
      alert(this.selected);
      let initialBalance;
      let interestBalance;
      let yearlyBalance;
      if (this.selected == "monthly") {
        initialBalance = 12 * this.amount;
      } else {
        initialBalance = 1 * this.amount;
      }
      let i = 0;
      while (i < 15) {
        if (i == 0) {
          this.result[i] = 0;
          yearlyBalance = this.result[i] + initialBalance;
        } else {
          yearlyBalance = this.result[i - 1] + initialBalance;
        }
        //yearlyBalance = this.result[i] + initialBalance;
        interestBalance = this.interest * 0.01 * yearlyBalance;
        this.result[i] = yearlyBalance + interestBalance;
        i++;
      }
      //return result;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>