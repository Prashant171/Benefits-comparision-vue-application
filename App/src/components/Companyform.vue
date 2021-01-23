<template>




  <div class="register">
    <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col col md="10">
          <b-card
          header="Submit your company form"
          header-bg-variant="primary"
          header-text-variant="white">
          <b-card-text>


 <ApolloMutation
  :mutation="require('../graphql/adddetails.gql')"
  :variables="{
    username:this.form.username,
    useremail:this.form.useremail,
    name:this.form.name,
    website:this.form.website,
    number_of_employees:this.form.number_of_employees,
    funding_stage:this.form.funding_stage,
    industry:this.form.industry,
    health_insurance:this.form.health_insurance,
    sum_insured:this.form.sum_insured,
    family_covered:this.form.family_covered,
    parents_covered:this.form.parents_covered,
    maternity_covered:this.form.maternity_covered,
    gym_membership:this.form.gym_membership,
    free_doctor_on_call:this.form.free_doctor_on_call,
    number_of_paid_leaves:this.form.number_of_paid_leaves,
    flexible_work_timings:this.form.flexible_work_timings,
    remote_work_friendly:this.form.remote_work_friendly

  }"
  @done="onDone"
>
<template v-slot="{ mutate, loading, error }">
  
     <b-form  v-on:submit.prevent="mutate()">


<div v-if="step==1">
<b-form  v-on:submit="firstformsubmit()">

  <h4>Step 1</h4>

 <b-form-group
       
        label="Your Name"
      >

     
        <b-form-input
          id="uinput-1"
          v-model="form.username"
          type="text"
          placeholder="Enter your name here"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group
        
        label="Your email address"
      >
        <b-form-input
          id="uinput-2"
          v-model="form.useremail"
          type="email"
          placeholder="Enter your email address here"
          required
        ></b-form-input>
      </b-form-group>

  <b-button type="submit" >Next</b-button>
</b-form>
</div>
 
<div v-if="step==2">

  <h4>Step 2</h4>

      <b-form-group
       
        label="Company Name"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Enter your company's name here"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Website" label-for="input-2">
        <b-form-input
          
          v-model="form.website"
          placeholder="Enter your company's website name here"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Number of Employees" label-for="input-2">
        <b-form-input
          
          v-model.number="form.number_of_employees"
          type="number"
          placeholder="Enter the number of employees in the company here"
          required
        ></b-form-input>
      </b-form-group>


       <b-form-group id="input-group-3" label="Funding Stage" label-for="input-2">
        <b-form-select
          
          v-model="form.funding_stage"
          :options="funding_stages"
          required
        ></b-form-select>
      </b-form-group>




        <b-form-group id="input-group-2" label="Industry" label-for="input-2">
        <b-form-input
          
          v-model="form.industry"
          placeholder="Enter the Industry here"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group label="Health Insurance" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.health_insurance" :aria-describedby="ariaDescribedby" @change="onChange()" name="some-radios1" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="form.health_insurance" :aria-describedby="ariaDescribedby" @change="onChange()" name="some-radios1" value="No" required>No</b-form-radio>
    </b-form-group>

    <div v-if="form.health_insurance=='Yes'">

     <b-form-group id="input-group-21" label="Sum insured" label-for="input-21">
        <b-form-input
          id="input-21"
          v-model.number="form.sum_insured"
          type="number"
          placeholder="Enter the sum insured here"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group label="Family covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.family_covered" :aria-describedby="ariaDescribedby" name="some-radios12" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="form.family_covered" :aria-describedby="ariaDescribedby" name="some-radios12" value="No" required>No</b-form-radio>
    </b-form-group>

    <b-form-group label="Parents covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.parents_covered" :aria-describedby="ariaDescribedby" name="some-radios13" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="form.parents_covered" :aria-describedby="ariaDescribedby" name="some-radios13" value="No" required>No</b-form-radio>
    </b-form-group>

    <b-form-group label="Maternity covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.maternity_covered" :aria-describedby="ariaDescribedby" name="some-radios14" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="form.maternity_covered" :aria-describedby="ariaDescribedby" name="some-radios14" value="No" required>No</b-form-radio>
    </b-form-group>

    </div>
    

      <b-form-group label="Gym Membership" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.gym_membership" :aria-describedby="ariaDescribedby" name="some-radios2" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="form.gym_membership" :aria-describedby="ariaDescribedby" name="some-radios2" value="No" required>No</b-form-radio>
    </b-form-group>

      <b-form-group label="Free doctor on Call" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.free_doctor_on_call" :aria-describedby="ariaDescribedby" name="some-radios3" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="form.free_doctor_on_call" :aria-describedby="ariaDescribedby" name="some-radios3" value="No" required>No</b-form-radio>
    </b-form-group>

        <b-form-group

        label="Number of Paid Leaves"
      >
        <b-form-input
          id="input-1"
          v-model.number="form.number_of_paid_leaves"
          type="number"
          placeholder="Enter your number of paid leaves here"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" label="Flexibility Work Timings" label-for="input-2">
        <b-form-input
          
          v-model="form.flexible_work_timings"
          placeholder="Enter your flexible work timings here"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group label="Remote Work Fiendly" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.remote_work_friendly" :aria-describedby="ariaDescribedby" name="some-radios4" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="form.remote_work_friendly" :aria-describedby="ariaDescribedby" name="some-radios4" value="No" required>No</b-form-radio>
    </b-form-group>

  <b-button @click.prevent="prev()">Previous</b-button>&nbsp;

      <b-button type="submit" variant="primary">Submit</b-button>
    </div>
    </b-form>

    <p v-if="error">An error occurred: {{ error }}</p>
</template>
</ApolloMutation>
          </b-card-text>

          </b-card>
        </b-col>
      </b-row>
    </b-container>

       <b-modal ref="my-modal" hide-footer  title="Success">
      <div class="d-block text-center">
        <h4>Your Form is succesfully submitted</h4>
      </div>
      <b-button class="mt-3" variant="outline-success" block @click="hideModal">Ok</b-button>
  
    </b-modal>


  </div>
</template>

<script>

  export default {
    data() {
      return {
        step:1,
        form: {
          username:'',
          useremail:'',
          name: '',
          website: '',
          number_of_employees: null,
          funding_stage:null,
          industry:'',
          health_insurance:'',
          sum_insured:null,
          family_covered:'',
          parents_covered:'',
          maternity_covered:'',
          gym_membership:'',
          free_doctor_on_call:'',
          number_of_paid_leaves:null,
          flexible_work_timings:'',
          remote_work_friendly:''
          
        },
        show: true,
        funding_stages: [{ text: 'Select One', value: null }, 
        'Seed Capital', 'Angel Investor Funding', 'Venture Capital Financing', 
        'Mezzanine Financing & Bridge Loans','IPO(Initial Public Offering)'],
      }
    },
    methods: {
     
    prev() {
      this.step--;
    },

    submit() {
      alert('Submit to blah and show blah and etc.');      
    },
    firstformsubmit(){
        this.step++;
    },

      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))

    },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      onChange() {
        var optionText = this.form.health_insurance;
        console.log(optionText,this.form.sum_insured);
        console.log(this.form.family_covered);
        if(optionText=='Yes')
        {
            this.form.family_covered='';
            this.form.parents_covered='';
            this.form.maternity_covered='';
        }
        else
        {
            this.form.sum_insured=0;
            this.form.family_covered='No';
            this.form.parents_covered='No';
            this.form.maternity_covered='No';
        }
          
        },
     onDone() {
     // alert("Your Form is succesfully submitted")
      console.log("a",this.authorId);
      this.$refs['my-modal'].show();

      this.form.username='';
      this.form.useremail='';
      this.form.name= '',
      this.form.website= '',
      this.form.number_of_employees= null,
      this.form.funding_stage=null,
      this.form.industry='',
      this.form.health_insurance='',
      this.form.gym_membership='',
      this.form.free_doctor_on_call='',
      this.form.number_of_paid_leaves=null,
      this.form.flexible_work_timings='',
      this.form.remote_work_friendly='';
      this.form.sum_insured='';
      this.form.family_covered='';
      this.form.parents_covered='';
      this.form.maternity_covered='';
      this.step--;
    }

  }
  }
</script>

<style scoped>
.register{
   padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
</style>
