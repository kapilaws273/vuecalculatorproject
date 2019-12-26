<template>
  <div id="Ppf">
    <el-form ref="form" :model="form" status-icon :rules="rules" label-width="120px">
      <el-form-item label="Amount" prop="amount">
        <el-input v-model="form.amount" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Frequency" prop="frequency">
        <el-select v-model="form.frequency" placeholder="please select your zone">
          <el-option label="Yearly" value="yearly"></el-option>
          <el-option label="Monthly" value="monthly"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Interest" prop="interest">
        <el-input v-model="form.interest"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">Submit</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>

    <!-- <span>Selected: {{ selected }}</span> -->
    <el-table :data="result" border style="width: 100%">
      <el-table-column prop="year" label="Year" width="180"></el-table-column>
      <el-table-column prop="openingBal" label="Opening Balance" width="180"></el-table-column>
      <el-table-column prop="yearlyContribution" label="Yearly Contribution" width="180"></el-table-column>
      <el-table-column prop="interest" label="Interest" width="180"></el-table-column>
      <el-table-column prop="closingBal" label="Closing Balance " width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
//let resultVal = "";
var arr = [];

export default {
  name: "Ppf",
  props: {
    msg: String
  },
  data() {
    var validateFrequency = (rule, value, callback) => {
      //alert(value);
      if (value === "") {
        callback(new Error("Please select Frequency"));
      } else {
        // alert(this.form.frequency);
        if (this.form.frequency !== "") {
          this.$refs.form.validateField("amount");
        }
        callback();
      }
    };
    var validateAmount = (rule, value, callback) => {
      //alert(value);
      if (value === "") {
        callback(new Error("Please enter Amount"));
      } else {
        //alert(this.form.amount);
        if (this.form.amount !== "") {
          this.$refs.form.validateField("interest");
        }
        callback();
      }
    };
    var validateInterest = (rule, value, callback) => {
      //alert(value);
      if (value === "") {
        callback(new Error("Please enter Interest"));
      } else {
        //alert(this.form.frequency);
        //if (this.form.frequency !== "") {
        //this.$refs.form.validateField("interest");
        //}
        callback();
      }
    };
    return {
      form: {
        frequency: "",
        region: "",
        amount: "",
        interest: ""
      },
      //selected: "",
      rules: {
        frequency: [{ validator: validateFrequency, trigger: "blur" }],
        amount: [{ validator: validateAmount, trigger: "blur" }],
        interest: [{ validator: validateInterest, trigger: "blur" }]
      },
      result: arr
    };
  },
  methods: {
    checkForm() {
      if (!this.frequency) {
        alert("select Frequncy");
      }
      if (this.selected && this.interest && this.amount) this.calculate();
      //return true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //  alert("submit!");
          this.calculate();
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    },
    calculate() {
      this.result = [];
      // alert(this.selected);
      let initialBalance;
      let interestBalance;
      let yearlyBalance;
      let closingBal;
      let openingBalacne;
      if (this.form.frequency == "monthly") {
        initialBalance = 12 * this.form.amount;
      } else {
        initialBalance = 1 * this.form.amount;
      }
      let i = 0;
      while (i < 15) {
        if (i == 0) {
          //this.result[i] = 0;
          openingBalacne = 0;
          yearlyBalance = initialBalance;
        } else {
          openingBalacne = this.result[i - 1].closingBal;
        }
        yearlyBalance = openingBalacne + initialBalance;
        interestBalance = Math.round(this.form.interest * 0.01 * yearlyBalance);
        closingBal = yearlyBalance + interestBalance;
        let resultVal = {
          year: i + 1 + "",
          openingBal: openingBalacne,
          yearlyContribution: initialBalance,
          interest: this.form.interest,
          closingBal: closingBal
        };
        this.result[i] = resultVal;
        //yearlyBalance + interestBalance;

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