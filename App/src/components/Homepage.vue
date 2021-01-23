import HelloWorld from '@/components/HelloWorld.vue';
<template>

<div>
  <div fluid class="top-section">
    <h2 class="top-header">Discover innovative companies and the people behind them</h2>&nbsp;&nbsp;
    <div>
    <b-button style="float: right;margin-right:20px;display:none;" variant="success" to="/companyform" >Submit your company details</b-button>
    </div>

    <div>

    <ApolloQuery
    :query="require('../graphql/getallcompany.gql')"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
          
          <h4 style="margin-left:15px;color:white;font-size:20px;">Search for:</h4>
            <b-row>
              
            <div v-for="company in data.company" :key="company.id">
            <b-col>
              <b-button class="button" :to="{ name: 'companydetails', params: {name: company.name }}">{{company.name}}
                </b-button>
            </b-col>
            
              
            
            </div>
            </b-row>
            </div>
      
    </template>
    </ApolloQuery>
    </div>
  </div>


  <div>
        <div>

    <ApolloQuery
    :query="require('../graphql/getallcompany.gql')"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="result apollo">
          
          <h4 style="margin-left:15px;color:white;font-size:20px;">Search for:</h4>
            <b-card>
              
          <div class="flex-table">
            <div><h4>Name</h4></div>
            <div><h4>Industry</h4></div>
            <div><h4>Actions</h4></div>
            
          </div>
          <div v-for="company in data.company" :key="company.id" class="flex-table">
            <div>{{ company.name }}</div>
            <div>{{ company.industry}}</div>
            <div class="actions">
             <router-link :to="{ name: 'companydetails', params: {name: company.name }}">More Details</router-link>
           </div>
          </div>

        
            </b-card>
            </div>
      
    </template>
    </ApolloQuery>
    </div>


  </div>
   <b-card-group deck>
    <b-card class="info-card" title="Investments" img-src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_500,w_500,f_auto,q_auto:eco/v1551315579/hompage-mktg-Sales_xgcoyk.svg" img-alt="Image" img-top>
      <b-card-text>
        Discover the funding information about the company
      </b-card-text>
    </b-card>

    <b-card class="info-card" title="Conduct market research" img-src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_500,w_500,f_auto,q_auto:eco/v1551315579/hompage-mktg-Research_yvssll.svg" img-alt="Image" img-top>
      <b-card-text>
        Find emerging trends and analyze changes across industries
      </b-card-text>
    </b-card>

    <b-card class="info-card" title="Find Investment" img-src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_500,w_500,f_auto,q_auto:eco/v1551315579/hompage-mktg-Invest_rnp0ee.svg" img-alt="Image" img-top>
      <b-card-text>
        Discover the funding information of various companies
      </b-card-text>
    </b-card>

    <b-card class="info-card" title="Compare the benefits" img-src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_500,w_500,f_auto,q_auto:eco/v1551315579/hompage-mktg-Entrepreneur_gvdywi.svg" img-alt="Image" img-top>
      <b-card-text>
        Compare the benefits with your competitors
      </b-card-text>
    </b-card>
  </b-card-group>


</div>
</template>

<script>
  export default {
    data() {
      return {
      name:'ads'
      }
    },
    methods: {
     
      
    }
  }
</script>

<style lang="scss" scoped>
.top-section{
background: linear-gradient(to bottom right,#5c84da,#dda153);

height:relative;
display: block;
font-family: Roboto,Arial,sans-serif;
line-height:1.2px;
padding-bottom:10px;

}

.top-header{
  display: block;
    padding: 16px;
    color: #fff;
}


.button {
  background-color: #fff;
  font-family: Roboto,Helvetica Neue,sans-serif;
    font-size: 14px;
    font-weight: 500;
 border:green;
  cursor: pointer;
  border-radius: 24px;
   display: grid;
  justify-content: center;
  color:#282828;
  align-items: center;
  grid-template-columns: auto 1fr;
 
  margin-left:10px;
  padding-right:15px;
  padding-left:15px;
  margin-top:10px;
}

.info-card{
  width:100%;
  border:none;
}

.card-image{
  height:100px;
  width:200px;
}

.flex-table {
    display: grid;
    grid-template-columns: repeat(auto-fill, 33%);
    padding: 10px;
    font-family: Roboto,Arial,sans-serif;
    border-bottom: 1px black solid;
    &:nth-of-type(2n) {
      background-color: #dedede;
    }
    .actions {
      * {
        padding-right: 1px
      }
    }
    
  }

  .card{
    margin:20px;
    background: linear-gradient(#74da7c, #26b4d8);

  }
</style>
