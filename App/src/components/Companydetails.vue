
<template>
  <div>


 <ApolloMutation
  :mutation="require('../graphql/editCompany.gql')"
  :variables="{
   
    id:this.form.id,
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

<div fluid class="top-section">
<b-row >
<b-col class="card-padding">
    <h6>COMPANY</h6>
      <h4>{{name.toUpperCase()}}</h4>
</b-col>

</b-row>


 <b-row >
        <b-col>
          <b-card>

<ApolloQuery
    :query="require('../graphql/getcompany.gql')"
    :variables="{name}"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        
        <div v-for="company in data" :key="company.id">    
          
     
<div class="actions" flex>
  <b-button  x-small class="edit" @click="setToEditing(company)">Edit</b-button>&nbsp;
  <div v-if="edit==1" style="float: right;padding-right:10px;display:block;">
  <b-button  x-small type="submit" variant="success">Submit</b-button>&nbsp;
  </div>
  &nbsp;&nbsp;
  <b-button class="competitor"  :to="{ name: 'competitors', params: {name: company.name, industry: company.industry,
  number_of_employees: company.number_of_employees }}">Competitors
             </b-button>

  <div v-if="edit==1" style="float: right;margin-left:20px;display:block;">
      <b-button  x-small id="cancel-button" @click="save()">Cancel</b-button>&nbsp;
  </div>
</div>

  <b-tabs content-class="mt-3" align="center" 
  >
    <b-tab title="Summary" active>


<b-card>
  <div>
  <b-card-group deck>
    <b-card title="About">


      <b-card-text>
        
        <p class="card-details">Company Name : {{company.name.toUpperCase()}}</p>


<div v-if="edit==1">
    <h4 class="card-details">Company's website</h4>
   <b-form-input
          
          v-model="company.website"
          placeholder="Enter your company's website name here"
          required
        ></b-form-input>
</div>
<div v-if="edit==0">
   <p>
          <i class="fa fa-globe" title="Website"></i>&nbsp;
          <a :href="company.website" target="_blank" >{{company.website}}</a></p>

</div>

       
 </b-card-text>
      
    </b-card>

    <b-card>
      <div class="highlight-title">Highlights</div>
   <div>
  
     <b-card style=" box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);
     margin-bottom:20px;">
        <div class="card-heading">Industry</div>
      <b-card-text>
        <div v-if="edit==1">
        <b-form-input
          
          v-model="company.industry"
          placeholder="Enter the Industry here"
          required
        ></b-form-input>
        </div>
        <div v-if="edit==0">
        <div class="card-value">{{company.industry}}</div>
        </div>
      </b-card-text>
     
    </b-card>

      <b-card style=" box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);margin-bottom:20px;">
        <div class="card-heading">Funding stage</div>
      <b-card-text>
        <div v-if="edit==1">
         <b-form-select
          
          v-model="form.funding_stage"
          :options="funding_stages"
          required
        ></b-form-select>
        </div>
        <div v-if="edit==0">
        <div class="card-value">{{company.funding_stage}}</div>
        </div>
      </b-card-text>
     
    </b-card>
        <b-card style=" box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);margin-bottom:20px;">
        <div class="card-heading">Number of current team members</div>
      <b-card-text>
        <div v-if="edit==1">
        <b-form-input
          
          v-model.number="company.number_of_employees"
          type="number"
          placeholder="Enter the number of employees in the company here"
          required
        ></b-form-input>
        </div>
        <div v-if="edit==0">
        <div class="card-value">{{company.number_of_employees}}</div>
        </div>
      </b-card-text>
     
    </b-card>

 
</div>

    </b-card>

    <b-card title="Benefits">
      <div v-if="edit==0">
       <p class="health-card">  Health_insurance :
        <b>{{company.health_insurance}}</b></p>

         <div v-if="company.health_insurance=='Yes'">
            <p class="health-card">   Sum insured :
              <b>{{company.sum_insured}}</b></p>
              <p class="health-card">   Family covered :
              <b>{{company.family_covered}}</b></p>
              <p class="health-card">   Parents covered :
              <b>{{company.parents_covered}}</b></p>
              <p class="health-card">   Matenity covered :
              <b>{{company.maternity_covered}}</b></p>
      </div>

       <p class="health-card">  Gym_membership :
        <b>{{company.gym_membership}}</b></p>
       <p class="health-card">   Free_doctor_on_call :
        <b>{{company.free_doctor_on_call}}</b></p>
       <p class="health-card">   Number_of_paid_leaves :
        <b>{{company.number_of_paid_leaves}}</b></p>
       <p class="health-card">   Flexible_work_timings :
        <b>{{company.flexible_work_timings}}</b></p>
       <p class="health-card">   Remote_work_friendly :
        <b>{{company.remote_work_friendly}}</b></p>
        </div>
      
        <div v-if="edit==1">

           <b-form-group label="Health Insurance" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.health_insurance" :aria-describedby="ariaDescribedby" name="some-radios1" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.health_insurance" :aria-describedby="ariaDescribedby" name="some-radios1" value="No" required>No</b-form-radio>
    </b-form-group>

 <div v-if="company.health_insurance=='Yes'">
    
     <b-form-group id="input-group-21" label="Sum insured" label-for="input-21">
        <b-form-input
          
          v-model.number="company.sum_insured"
          type="number"
          placeholder="Enter the sum insured here"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group label="Family covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.family_covered" :aria-describedby="ariaDescribedby" name="some-radios12" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.family_covered" :aria-describedby="ariaDescribedby" name="some-radios12" value="No" required>No</b-form-radio>
    </b-form-group>

    <b-form-group label="Parents covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.parents_covered" :aria-describedby="ariaDescribedby" name="some-radios13" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.parents_covered" :aria-describedby="ariaDescribedby" name="some-radios13" value="No" required>No</b-form-radio>
    </b-form-group>

    <b-form-group label="Maternity covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.maternity_covered" :aria-describedby="ariaDescribedby" name="some-radios14" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.maternity_covered" :aria-describedby="ariaDescribedby" name="some-radios14" value="No" required>No</b-form-radio>
    </b-form-group>

    </div>

      <b-form-group label="Gym Membership" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.gym_membership" :aria-describedby="ariaDescribedby" name="some-radios2" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.gym_membership" :aria-describedby="ariaDescribedby" name="some-radios2" value="No" required>No</b-form-radio>
    </b-form-group>

      <b-form-group label="Free doctor on Call" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.free_doctor_on_call" :aria-describedby="ariaDescribedby" name="some-radios3" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.free_doctor_on_call" :aria-describedby="ariaDescribedby" name="some-radios3" value="No" required>No</b-form-radio>
    </b-form-group>

        <b-form-group
        id="input-group-1"
        label="Number of Paid Leaves"
      >
        <b-form-input
          id="input-1"
          v-model.number="company.number_of_paid_leaves"
          type="number"
          placeholder="Enter your number of paid leaves here"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" label="Flexibility Work Timings" label-for="input-2">
        <b-form-input
          
          v-model="company.flexible_work_timings"
          placeholder="Enter your flexible work timings here"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group label="Remote Work Fiendly" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.remote_work_friendly" :aria-describedby="ariaDescribedby" name="some-radios4" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.remote_work_friendly" :aria-describedby="ariaDescribedby" name="some-radios4" value="No" required>No</b-form-radio>
    </b-form-group>

      </div>

    </b-card>
  </b-card-group>
</div>
</b-card>

    </b-tab>
    <b-tab title="Benefits">

      
    <b-card >
      <div v-if="edit==0">
       <p class="health-card">  Health_insurance :
        <b>{{company.health_insurance}}</b></p>

      <div v-if="company.health_insurance=='Yes'">
            <p class="health-card">   Sum insured :
              <b>{{company.sum_insured}}</b></p>
              <p class="health-card">   Family covered :
              <b>{{company.family_covered}}</b></p>
              <p class="health-card">   Parents covered :
              <b>{{company.parents_covered}}</b></p>
              <p class="health-card">   Matenity covered :
              <b>{{company.maternity_covered}}</b></p>
      </div>
       
       <p class="health-card">  Gym_membership :
        <b>{{company.gym_membership}}</b></p>
       <p class="health-card">   Free_doctor_on_call :
        <b>{{company.free_doctor_on_call}}</b></p>
       <p class="health-card">   Number_of_paid_leaves :
        <b>{{company.number_of_paid_leaves}}</b></p>
       <p class="health-card">   Flexible_work_timings :
        <b>{{company.flexible_work_timings}}</b></p>
       <p class="health-card">   Remote_work_friendly :
        <b>{{company.remote_work_friendly}}</b></p>
        </div>
      
      <div v-if="edit==1">

           <b-form-group label="Health Insurance" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.health_insurance" :aria-describedby="ariaDescribedby" name="some-radios21" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.health_insurance" :aria-describedby="ariaDescribedby" name="some-radios21" value="No" required>No</b-form-radio>
    </b-form-group>

 <div v-if="company.health_insurance=='Yes'">
    
     <b-form-group id="input-group-221" label="Sum insured" label-for="input-221">
        <b-form-input
          id="input-221"
          v-model.number="company.sum_insured"
          type="number"
          placeholder="Enter the sum insured here"
          required
        ></b-form-input>
      </b-form-group>

    <b-form-group label="Family covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.family_covered" :aria-describedby="ariaDescribedby" name="some-radios212" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.family_covered" :aria-describedby="ariaDescribedby" name="some-radios212" value="No" required>No</b-form-radio>
    </b-form-group>

    <b-form-group label="Parents covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.parents_covered" :aria-describedby="ariaDescribedby" name="some-radios213" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.parents_covered" :aria-describedby="ariaDescribedby" name="some-radios213" value="No" required>No</b-form-radio>
    </b-form-group>

    <b-form-group label="Maternity covered" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.maternity_covered" :aria-describedby="ariaDescribedby" name="some-radios214" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.maternity_covered" :aria-describedby="ariaDescribedby" name="some-radios214" value="No" required>No</b-form-radio>
    </b-form-group>

    </div>

      <b-form-group label="Gym Membership" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.gym_membership" :aria-describedby="ariaDescribedby" name="some-radios22" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.gym_membership" :aria-describedby="ariaDescribedby" name="some-radios22" value="No" required>No</b-form-radio>
    </b-form-group>

      <b-form-group label="Free doctor on Call" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.free_doctor_on_call" :aria-describedby="ariaDescribedby" name="some-radios23" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.free_doctor_on_call" :aria-describedby="ariaDescribedby" name="some-radios23" value="No" required>No</b-form-radio>
    </b-form-group>

        <b-form-group
        id="input-group-21"
        label="Number of Paid Leaves"
      >
        <b-form-input
          
          v-model.number="company.number_of_paid_leaves"
          type="number"
          placeholder="Enter your number of paid leaves here"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" label="Flexibility Work Timings" label-for="input-22">
        <b-form-input
          id="input-22"
          v-model="company.flexible_work_timings"
          placeholder="Enter your flexible work timings here"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group label="Remote Work Fiendly" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="company.remote_work_friendly" :aria-describedby="ariaDescribedby" name="some-radios24" value="Yes" required>Yes</b-form-radio>
      <b-form-radio v-model="company.remote_work_friendly" :aria-describedby="ariaDescribedby" name="some-radios24" value="No" required>No</b-form-radio>
    </b-form-group>

      </div>

    </b-card>

    </b-tab>
    <b-tab title="Highlights">
      
    <b-card>
      <div class="highlight-title">Highlights</div>
   <div>
  
     <b-card style=" box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);
     margin-bottom:20px;">
        <div class="card-heading">Industry</div>
      <b-card-text>
        <div v-if="edit==1">
        <b-form-input
          
          v-model="company.industry"
          placeholder="Enter the Industry here"
          required
        ></b-form-input>
        </div>
        <div v-if="edit==0">
        <div class="card-value">{{company.industry}}</div>
        </div>
      </b-card-text>
     
    </b-card>

      <b-card style=" box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);margin-bottom:20px;">
        <div class="card-heading">Funding stage</div>
      <b-card-text>
        <div v-if="edit==1">
        <b-form-select
          
          v-model="form.funding_stage"
          :options="funding_stages"
          required
        ></b-form-select>
        </div>
        <div v-if="edit==0">
        <div class="card-value">{{company.funding_stage}}</div>
        </div>
      </b-card-text>
     
    </b-card>
        <b-card style=" box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);margin-bottom:20px;">
        <div class="card-heading">Number of current team members</div>
      <b-card-text>
        <div v-if="edit==1">
        <b-form-input
          
          v-model.number="company.number_of_employees"
          type="number"
          placeholder="Enter the number of employees in the company here"
          required
        ></b-form-input>
        </div>
        <div v-if="edit==0">
        <div class="card-value">{{company.number_of_employees}}</div>
        </div>
      </b-card-text>
     
    </b-card>

 
</div>

    </b-card>
    </b-tab>
  </b-tabs>
        </div>

 
  
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    
    </template>

  </ApolloQuery>


          </b-card>
          
        </b-col>

  </b-row>

</div>

    </b-form>

    <p v-if="error">An error occurred a: {{ error }}</p>
</template>
</ApolloMutation>

  <b-modal ref="my-modal" hide-footer  title="Success">
      <div class="d-block text-center">
        <h4>Your Form is succesfully submitted</h4>
      </div>
      <b-button class="mt-3" variant="outline-success" block @click="hideModal">Ok</b-button>
  
    </b-modal>

     <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Verification"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Please enter your company email"
          label-for="name-input"
          invalid-feedback="Please enter the valid email address"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            type="email"
            v-model="email"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
</div>
</template>

<script>

export default {
 name: 'companydetails',
  data(){
    return{
    
       edit: 0,
        form: {
          id:null,
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
        email: '',
        nameState: null,
        funding_stages: [{ text: 'Select One', value: null }, 
        'Seed Capital', 'Angel Investor Funding', 'Venture Capital Financing', 
        'Mezzanine Financing & Bridge Loans','IPO(Initial Public Offering)'],
         
        reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/

    }
  },
  props: {
    name: String
  },
  methods:{
   
     setToEditing(company) {
        this.form=company;
        this.$refs['modal'].show();
        
      },
      save(){
        this.edit=0;
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
     onDone() {
     // alert("Your Form is succesfully submitted")
  
      this.$refs['my-modal'].show();
      this.edit=0;
    },
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.email = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
        

      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          this.nameState=false;
          return
        }

        if(!this.reg.test(this.email))
        {
          this.nameState=false;
          return 
        }

       
        var comp   = this.email.substring(this.email.lastIndexOf("@")+1, this.email.lastIndexOf("."));
        comp= comp.toLowerCase();
        
        if(comp!= this.form.name.toLowerCase())
        {
          this.nameState=false;
          return
        }
        


        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })

        this.edit=1;
      }

  }
}
</script>

<style scoped>

.container{
  width : 100%
}
.card-padding{
   padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  margin-left:4rem;
  position: relative;
 
}

.vl {
 border-left: 6px solid green;
}

.top-section{
  background-image: url("https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1601422345/clientapp/profile-header-background-swirls.jpg");
  height:relative
}

.card-shadow{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  height:100px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.detail-card{
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  height:100px;
  text-align: center;
  font-family: arial;
  padding-right:50px;
  
}

.cards{
  margin: -20px;
  max-width: 1000px;
  display:grid ;
  grid-template-columns:repeat(3,1fr);
  padding-right:20px;
  padding-left:20px;
  padding-top:20px;
  padding-bottom:50px;
}

.card-heading{
  line-height:30px;
  color:#183444;
  letter-spacing:.4px;
  font-weight:bold;
  font-family:Roboto,Arial, sans-serif;
  padding-bottom: 4px;
  font-size:14px;
}

.card-value{
  color:#146aff;
  font-weight:500;
}

.card-details{
  color: #282828;
  letter-spacing:.2px; line-height: normal;
  font-weight:bold;
  font-family:Roboto,Arial, sans-serif;
  font-size:14px;

  
}

.health-card{
  color:#666;
  font-weight:500;
  font-family:Roboto,Serial,sans-serif;
  font-size:14px;
  line-height:20px;
  letter-spacing:.4px;
}

.highlight-margin{
  margin-bottom:20px;
}

.highlight-title{
  margin-bottom: .75rem;
  margin-left:1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

 .actions {
    right: 0px;
    top:10px;
  }

  .edit{
background:rgb(238, 157, 7);
  }

  .competitor{
background:rgb(11, 127, 143);
  }

  .btn{
    margin-left:5px;
  }
</style>
