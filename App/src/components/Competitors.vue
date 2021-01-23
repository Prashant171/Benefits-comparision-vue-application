<template>
    <div class="top-section">


<ApolloQuery
    :query="require('../graphql/getcompetitors.gql')"
    :variables="{name,industry,number_of_employees}"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">

     <div >
           <h2 class="top-header">Competitors of the company : 
             <span Style="color:lightgreen;">
               {{name.toUpperCase()}}
              </span>
            </h2>

      </div>      

<div>
  <div  class="price-card">
  <b-row>

    <div v-if="data.getcompetitors.length==0" style="style=15px;">
      <b-col>
         <b-card title="Message" >
    <b-card-text>
       No Competitors found in our database
    </b-card-text>

    <b-button  variant="success" to="/" >Search for other companies</b-button>
    
  </b-card>
      </b-col>
      
    </div>
    <div v-if="data.getcompetitors.length>0">
      
    <b-col>
      <div class="container">
          <div class="whole">
    <div class="type">
      <p>{{data.getcompetitors[0].name}}</p>
      </div>
    <div class="plan">

    
      <div class="content">
        <ul>
                
          <li>
            <div v-if="data.getcompetitors[0].health_insurance=='Yes'">
                &#9989; Health Insurance
            </div>

            <div v-if="data.getcompetitors[0].health_insurance=='No'">
             &#10060;Health Insurance
            </div> 
          </li>
          
           <li>
            <div v-if="data.getcompetitors[0].family_covered=='Yes'">
                &#9989; Family covered
            </div>

            <div v-if="data.getcompetitors[0].family_covered=='No'">
             &#10060; Family covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[0].parents_covered=='Yes'">
                &#9989; Parents covered
            </div>

            <div v-if="data.getcompetitors[0].parents_covered=='No'">
             &#10060; Parents covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[0].maternity_covered=='Yes'">
                &#9989; Maternity covered
            </div>

            <div v-if="data.getcompetitors[0].maternity_covered=='No'">
             &#10060; Maternity covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[0].gym_membership=='Yes'">
                &#9989; Gym membership
            </div>

            <div v-if="data.getcompetitors[0].gym_membership=='No'">
             &#10060;Gym membership
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[0].free_doctor_on_call=='Yes'">
                &#9989; Free doctor-on-call
            </div>

            <div v-if="data.getcompetitors[0].free_doctor_on_call=='No'">
             &#10060;Free doctor-on-call
            </div> 
          </li>

          <li>
           <span style="color:lightgreen;">
             {{data.getcompetitors[0].number_of_paid_leaves}}
            </span> 
            Paid leaves</li>

           <li>
            <div v-if="data.getcompetitors[0].remote_work_friendly=='Yes'">
                &#9989; Remote work friendly
            </div>

            <div v-if="data.getcompetitors[0].remote_work_friendly=='No'">
             &#10060;Remote work friendly
            </div> 
          </li>

           <li>
            <b-button class="price" :to="{ name: 'companydetails', params: {name: data.getcompetitors[0].name }}">
              More Info
            </b-button>

          </li>
        
        </ul>

      </div>
      
    </div>
  </div>
    </div>  
    </b-col>  
    </div>

    <div v-if="data.getcompetitors.length>1">
      
   <b-col>
      <div class="container">
          <div class="whole">
    <div class="type standard">
      <p>{{data.getcompetitors[1].name}}</p>
      </div>
    <div class="plan">

    
      <div class="content">
        <ul>
                
          <li>
            <div v-if="data.getcompetitors[1].health_insurance=='Yes'">
                &#9989; Health Insurance
            </div>

            <div v-if="data.getcompetitors[1].health_insurance=='No'">
             &#10060;Health Insurance
            </div> 
          </li>

   
           <li>
            <div v-if="data.getcompetitors[1].family_covered=='Yes'">
                &#9989; Family covered
            </div>

            <div v-if="data.getcompetitors[1].family_covered=='No'">
             &#10060; Family covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[1].parents_covered=='Yes'">
                &#9989; Parents covered
            </div>

            <div v-if="data.getcompetitors[1].parents_covered=='No'">
             &#10060; Parents covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[1].maternity_covered=='Yes'">
                &#9989; Maternity covered
            </div>

            <div v-if="data.getcompetitors[1].maternity_covered=='No'">
             &#10060; Maternity covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[1].gym_membership=='Yes'">
                &#9989; Gym membership
            </div>

            <div v-if="data.getcompetitors[1].gym_membership=='No'">
             &#10060;Gym membership
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[1].free_doctor_on_call=='Yes'">
                &#9989; Free doctor-on-call
            </div>

            <div v-if="data.getcompetitors[1].free_doctor_on_call=='No'">
             &#10060;Free doctor-on-call
            </div> 
          </li>

          <li>
           <span style="color:lightgreen;">
             {{data.getcompetitors[1].number_of_paid_leaves}}
            </span> 
            Paid leaves</li>

           <li>
            <div v-if="data.getcompetitors[1].remote_work_friendly=='Yes'">
                &#9989; Remote work friendly
            </div>

            <div v-if="data.getcompetitors[1].remote_work_friendly=='No'">
             &#10060;Remote work friendly
            </div> 
          </li>

          <li>
            <b-button class="price" :to="{ name: 'companydetails', params: {name: data.getcompetitors[1].name }}">
              More Info
            </b-button>

          </li>

        
        </ul>

      </div>
      
    </div>
  </div>
    </div>  
    </b-col>  
    </div>

    <div v-if="data.getcompetitors.length>2">
      <b-col>
      <div class="container">
          <div class="whole">
    <div class="type ultimate">
      <p>{{data.getcompetitors[2].name}}</p>
      </div>
    <div class="plan">

    
      <div class="content">
        <ul>
                
          <li>
            <div v-if="data.getcompetitors[2].health_insurance=='Yes'">
                &#9989; Health Insurance
            </div>

            <div v-if="data.getcompetitors[2].health_insurance=='No'">
             &#10060;Health Insurance
            </div> 
          </li>

   
           <li>
            <div v-if="data.getcompetitors[2].family_covered=='Yes'">
                &#9989; Family covered
            </div>

            <div v-if="data.getcompetitors[2].family_covered=='No'">
             &#10060; Family covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[2].parents_covered=='Yes'">
                &#9989; Parents covered
            </div>

            <div v-if="data.getcompetitors[2].parents_covered=='No'">
             &#10060; Parents covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[2].maternity_covered=='Yes'">
                &#9989; Maternity covered
            </div>

            <div v-if="data.getcompetitors[2].maternity_covered=='No'">
             &#10060; Maternity covered
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[2].gym_membership=='Yes'">
                &#9989; Gym membership
            </div>

            <div v-if="data.getcompetitors[2].gym_membership=='No'">
             &#10060;Gym membership
            </div> 
          </li>

           <li>
            <div v-if="data.getcompetitors[2].free_doctor_on_call=='Yes'">
                &#9989; Free doctor-on-call
            </div>

            <div v-if="data.getcompetitors[2].free_doctor_on_call=='No'">
             &#10060;Free doctor-on-call
            </div> 
          </li>

          <li>
           <span style="color:lightgreen;">
             {{data.getcompetitors[2].number_of_paid_leaves}}
            </span> 
            Paid leaves</li>

           <li>
            <div v-if="data.getcompetitors[2].remote_work_friendly=='Yes'">
                &#9989; Remote work friendly
            </div>

            <div v-if="data.getcompetitors[2].remote_work_friendly=='No'">
             &#10060;Remote work friendly
            </div> 
          </li>

          <li>
            <b-button class="price" :to="{ name: 'companydetails', params: {name: data.getcompetitors[2].name }}">
              More Info
            </b-button>

          </li>

        
        </ul>

      </div>
      
    </div>
  </div>
    </div>  
    </b-col>  
    </div>

  </b-row>
   
  </div>
</div>
      
</div>
</template>
</ApolloQuery>
</div>
</template>

<script>
export default {
 props: {
    name: String,
    industry:String,
    number_of_employees:Number
  }
}
</script>

<style scoped>

.top-section{
background: linear-gradient(#e66465, #9198e5);
height:100%;
padding-bottom:100px;
display: block;
font-family: Roboto,Arial,sans-serif;
align: center;
}


.top-header{
  display: block;
    padding: 26px;
    color: #fff;
    font-size:24px;
    margin-left:20px;
    font-family: Roboto,Arial,sans-serif;

}

.price-card{
    margin-left:20px;
    color:none;
    margin-top:20px;
    font-size:14px;
    font-family: Roboto,Arial,sans-serif;

}

body{
	font-family:'Open Sans';
    font-style:condensed;
  background: #5b2072; /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover,  #5b2072 0%, #5d1566 50%, #251a41 100%); /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#5b2072), color-stop(50%,#5d1566), color-stop(100%,#251a41)); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover,  #5b2072 0%,#5d1566 50%,#251a41 100%); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover,  #5b2072 0%,#5d1566 50%,#251a41 100%); /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover,  #5b2072 0%,#5d1566 50%,#251a41 100%); /* IE10+ */
    background: radial-gradient(ellipse at center,  #5b2072 0%,#5d1566 50%,#251a41 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5b2072', endColorstr='#251a41',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

a{
	font-size: 18px;
	font-family:'Open Sans';
    color: white;
    text-decoration: none;

}

input:focus,textarea:focus,select:focus{
  border:1px solid #fafafa;
  -webkit-box-shadow:0 0 6px #007eff;
  -moz-box-shadow:0 0 5px #007eff;
  box-shadow:0 0 5px #007eff;
  outline: none;
}

sup{

	font-size: 40px;
}

ul{
	list-style: none;
	font-size: 15px;
	font-family:'Open Sans';
	color: #9095aa;
	padding: 0px;
	margin: 0px;


}


li{
border-bottom: 1px solid #494a5a;
padding: 0px;
margin-left: 20px;
text-align: left;
height: 52px;
line-height: 52px;
}


#container{

  text-align:center;
}

.whole{

}



.type{
	width: 350px;
	border-radius: 5px 5px 0px 0px;
	background-color: #eac80d;
	height: 62px;
   
	border-bottom: 3px solid #bfa30c;

}

.type p{
	font-family:'Open Sans';
    font-weight: 800;
	font-size: 29px;
	text-transform: uppercase;
	color: white;
	text-align: center;
	padding-top: 10px;

	

}

.plan{
	width: 350px;
	background-color: #2b2937;

	border-radius: 0px 0px 5px 5px;
    font-family:'Open Sans';
    font-style:condensed;
    font-size: 90px;
    color: white;
    text-align: center;


}
.standard{
	background-color: #1abc9c;
	border-bottom: 3px solid #18937b;
}

.ultimate{
	background-color: #5d6a9a;
	border-bottom: 3px solid #474f6f;
}





.header{
	border-bottom: 1px solid #494a5a;
	padding-bottom: 39px;


}

.header span{
	font-size: 32px;

	
}

.month{
	font-size: 14px;
	color: #575757;
	padding: 0px;
	margin: -10px;
}

.price{
	height:40px;
  width:95%;
  background-color:dimgray
}

.cart{
  
  color:white;
  position: relative;
  top: 16px;
  
}

.bottom{
  
  
}

.content{
  
}

.login_c{
  width:500px;
  background-color:#2b2937;
  height:300px;
  margin: 0 auto;
  margin-top:40px;
  border-radius:5px;
  
}

.login_c input{
  width: 350px;
height: 40px;
  border: 1px solid #494a5a;
  margin-bottom:20px;
  border-radius:5px;
  padding-left: 10px;

}


.login{
  background-color: #BC4B1A;
	border-bottom: 3px solid #7C3618;
  width:100%;
  
}

.top{
  margin-top:35px;
}

.nodisplay{
  opacity: 0.1;
}

.selected{
  background-color:#1F1B36;
  margin:0px;
  padding:0px;
}

</style>
