const express = require('express')
const { graphqlHTTP } = require('express-graphql');
var cors = require('cors')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
const app = express()

const user = [
	{ id: 1, name: 'J. K. Rowling',email:"s@gmal.com",company:'inszoom' }
]

const company = [
  {
    id:1, name:'Zomato', 
    website:'https://www.zomato.com',
    number_of_employees:5000,
    funding_stage:'IPO(Initial Public Offering)',
    industry:'Food Delivery',
    health_insurance: 'Yes',
    sum_insured: 200000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:9,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'Yes'
},



{
    id:2, name:'Deliveroo', 
    website:'https://deliveroo.co.uk/',
    number_of_employees:5000,
    funding_stage:'Mezzanine Financing & Bridge Loans',
    industry:'Food Delivery',
    health_insurance: 'Yes',
    sum_insured: 50000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'No',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:9,
    flexible_work_timings:'9am-7pm',
    remote_work_friendly: 'No'
},




{
    id:3, name:'Glovo', 
    website:'https://www.glovoapp.com',
    number_of_employees:5000,
    funding_stage:'Venture Capital Financing',
    industry:'Food Delivery',
    health_insurance: 'Yes',
    sum_insured: 100000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'No',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'9am-5pm',
    remote_work_friendly: 'Yes'
},



{
    id:4, name:'Bolt', 
    website:'https://bolt.eu/',
    number_of_employees:5000,
    funding_stage:'Venture Capital Financing',
    industry:'Food Delivery',
    health_insurance: 'Yes',
    sum_insured: 100000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'No',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:8,
    flexible_work_timings:'8am-6pm',
    remote_work_friendly: 'No'
},



{
    id:5, name:'Grubhub', 
    website:'https://www.grubhub.com',
    number_of_employees:5000,
    funding_stage:'IPO(Initial Public Offering)',
    industry:'Food Delivery',
    health_insurance: 'Yes',
    sum_insured: 200000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:11,
    flexible_work_timings:'9am-7pm',
    remote_work_friendly: 'Yes'
},



{
    id:6, name:'Takeaway.com', 
    website:'https://corporate.takeaway.com',
    number_of_employees:5000,
    funding_stage:'IPO(Initial Public Offering)',
    industry:'Food Delivery',
    health_insurance: 'Yes',
    sum_insured: 100000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'No',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'8am-5pm',
    remote_work_friendly: 'No'
},


{
    id:7, name:'Just Eat', 
    website:'https://www.just-eat.com',
    number_of_employees:5000,
    funding_stage:'IPO(Initial Public Offering)',
    industry:'Food Delivery',
    health_insurance: 'Yes',
    sum_insured: 50000,
    family_covered:'Yes',
    parents_covered:'No',
    maternity_covered:'No',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:8,
    flexible_work_timings:'10am-7pm',
    remote_work_friendly: 'No'
},

{
    id:8, name:'Dunzo', 
    website:'https://dunzo.in',
    number_of_employees:2500,
    funding_stage:'Venture Capital Financing',
    industry:'E-Commerce',
    health_insurance: 'Yes',
    sum_insured: 300000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:12,
    flexible_work_timings:'8am-6pm',
    remote_work_friendly: 'Yes'
},



{
    id:9, name:'Facebook', 
    website:'https://www.facebook.com',
    number_of_employees:10000,
    funding_stage:'IPO(Initial Public Offering)',
    industry:'Social Media',
    health_insurance: 'Yes',
    sum_insured: 500000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'Yes',
    number_of_paid_leaves:12,
    flexible_work_timings:'9am-5pm',
    remote_work_friendly: 'Yes'
},


{
    id:10, name:'Netflix', 
    website:'https://www.netflix.com',
    number_of_employees:5000,
    funding_stage:'IPO(Initial Public Offering)',
    industry:'Media and Entertainment',
    health_insurance: 'Yes',
    sum_insured: 300000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'Yes',
    free_doctor_on_call:'No',
    number_of_paid_leaves:12,
    flexible_work_timings:'10am-6pm',
    remote_work_friendly: 'Yes'
},



{
    id:11, name:'SoFi', 
    website:'https://www.sofi.com',
    number_of_employees:5000,
    funding_stage:'Venture Capital Financing',
    industry:'Finance',
    health_insurance: 'Yes',
    sum_insured: 150000,
    family_covered:'Yes',
    parents_covered:'No',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'8am-6pm',
    remote_work_friendly: 'No'
},



{
    id:12, name:'Cruise', 
    website:'https://www.getcruise.com',
    number_of_employees:5000,
    funding_stage:'Venture Capital Financing',
    industry:'Transportation',
    health_insurance: 'Yes',
    sum_insured: 200000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'No',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'9am-7pm',
    remote_work_friendly: 'Yes'
},


{
    id:13, name:'Reddit', 
    website:'https://www.reddit.com/',
    number_of_employees:250,
    funding_stage:'Venture Capital Financing',
    industry:'Social Media',
    health_insurance: 'Yes',
    sum_insured: 300000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:11,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'Yes'
},



{
    id:14, name:'Crowdcube', 
    website:'https://www.crowdcube.com/',
    number_of_employees:100,
    funding_stage:'Venture Capital Financing',
    industry:'Finance',
    health_insurance: 'Yes',
    sum_insured: 50000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'No',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:9,
    flexible_work_timings:'9am-5pm',
    remote_work_friendly: 'No'
},



{
    id:15, name:'PlayVS', 
    website:'https://www.playvs.com/',
    number_of_employees:250,
    funding_stage:'Venture Capital Financing',
    industry:'IT',
    health_insurance: 'Yes',
    sum_insured: 200000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'Yes'
},




{
    id:16, name:'Squire', 
    website:'https://www.getsquire.com',
    number_of_employees:100,
    funding_stage:'Venture Capital Financing',
    industry:'FinTech',
    health_insurance: 'Yes',
    sum_insured: 80000,
    family_covered:'Yes',
    parents_covered:'No',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:9,
    flexible_work_timings:'9am-7pm',
    remote_work_friendly: 'No'
},




{
    id:17, name:'Curve', 
    website:'https://www.curve.com',
    number_of_employees:500,
    funding_stage:'Venture Capital Financing',
    industry:'FinTech',
    health_insurance: 'Yes',
    sum_insured: 200000,
    family_covered:'Yes',
    parents_covered:'No',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:11,
    flexible_work_timings:'8am-5pm',
    remote_work_friendly: 'No'
},




{
    id:18, name:'Twitch', 
    website:'https://www.twitch.tv/',
    number_of_employees:500,
    funding_stage:'Venture Capital Financing',
    industry:'Social Media',
    health_insurance: 'Yes',
    sum_insured: 100000,
    family_covered:'No',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:9,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'No'
},




{
    id:19, name:'Checkout', 
    website:'https://www.checkout.com',
    number_of_employees:5000,
    funding_stage:'Venture Capital Financing',
    industry:'FinTech',
    health_insurance: 'Yes',
    sum_insured: 20000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'Yes',
    number_of_paid_leaves:9,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'No'
},




{
    id:20, name:'SoFi', 
    website:'https://www.sofi.com',
    number_of_employees:5000,
    funding_stage:'Venture Capital Financing',
    industry:'Finance',
    health_insurance: 'Yes',
    sum_insured: 50000,
    family_covered:'Yes',
    parents_covered:'No',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:11,
    flexible_work_timings:'9am-5pm',
    remote_work_friendly: 'No'
},



{
    id:21, name:'Drift', 
    website:'https://www.drift.com',
    number_of_employees:500,
    funding_stage:'Venture Capital Financing',
    industry:'Marketing',
    health_insurance: 'Yes',
    sum_insured: 300000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'No',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'8am-6pm',
    remote_work_friendly: 'Yes'
},



{
    id:22, name:'Paytm', 
    website:'https://paytm.com/',
    number_of_employees:1000,
    funding_stage:'Mezzanine Financing & Bridge Loans',
    industry:'Finance',
    health_insurance: 'Yes',
    sum_insured: 500000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'Yes',
    number_of_paid_leaves:12,
    flexible_work_timings:'9am-7pm',
    remote_work_friendly: 'Yes'
},



{
    id:23, name:'UpGrad', 
    website:'https://upgrad.com',
    number_of_employees:500,
    funding_stage:'Venture Capital Financing',
    industry:'Education',
    health_insurance: 'Yes',
    sum_insured: 200000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'No'
},



{
    id:24, name:'mfine', 
    website:'https://www.mfine.co/',
    number_of_employees:500,
    funding_stage:'Venture Capital Financing',
    industry:'Health Care',
    health_insurance: 'Yes',
    sum_insured: 100000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'Yes',
    number_of_paid_leaves:9,
    flexible_work_timings:'9am-7pm',
    remote_work_friendly: 'No'
},


{
    id:25, name:'Bharat Biotech', 
    website:'https://www.bharatbiotech.com',
    number_of_employees:1000,
    funding_stage:'Venture Capital Financing',
    industry:'Biotechnology',
    health_insurance: 'Yes',
    sum_insured: 50000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'10am-6pm',
    remote_work_friendly: 'No'
},


{
    id:26, name:'Delhivery', 
    website:'https://delhivery.com',
    number_of_employees:10000,
    funding_stage:'Mezzanine Financing & Bridge Loans',
    industry:'E-Commerce',
    health_insurance: 'Yes',
    sum_insured: 200000,
    family_covered:'Yes',
    parents_covered:'No',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:8,
    flexible_work_timings:'9am-7pm',
    remote_work_friendly: 'No'
},


{
    id:27, name:'Pine Labs', 
    website:'https://www.pinelabs.com/',
    number_of_employees:5000,
    funding_stage:'Mezzanine Financing & Bridge Loans',
    industry:'Fintech',
    health_insurance: 'Yes',
    sum_insured: 50000,
    family_covered:'Yes',
    parents_covered:'No',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:8,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'No'
},


{
    id:28, name:'Rebel Foods', 
    website:'https://order.faasos.io/',
    number_of_employees:10000,
    funding_stage:'Venture Capital Financing',
    industry:'Food Delivery',
    health_insurance: 'Yes',
    sum_insured: 300000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:12,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'Yes'
},

{
    id:29, name:'boAt', 
    website:'https://www.boat-lifestyle.com/',
    number_of_employees:250,
    funding_stage:'Venture Capital Financing',
    industry:'Consumer Electronics',
    health_insurance: 'Yes',
    sum_insured: 400000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'8am-6pm',
    remote_work_friendly: 'Yes'
},



{
    id:30, name:'Jumbotail', 
    website:'https://www.jumbotail.com',
    number_of_employees:250,
    funding_stage:'Venture Capital Financing',
    industry:'E-Commerce',
    health_insurance: 'Yes',
    sum_insured: 200000,
    family_covered:'Yes',
    parents_covered:'Yes',
    maternity_covered:'Yes',
    gym_membership: 'No',
    free_doctor_on_call:'No',
    number_of_paid_leaves:10,
    flexible_work_timings:'9am-6pm',
    remote_work_friendly: 'Yes'
}




]


const CompanyType = new GraphQLObjectType({
    name: 'Company',
    description: 'This represents a list of company registered',
    fields: () => ({
      id: { type: GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLNonNull(GraphQLString) },
      website: { type: GraphQLNonNull(GraphQLString) },
      number_of_employees: { type: GraphQLNonNull(GraphQLInt) },
      funding_stage: { type: GraphQLNonNull(GraphQLString) },
      industry: { type: GraphQLNonNull(GraphQLString) },
      health_insurance: { type: GraphQLNonNull(GraphQLString) },
      sum_insured: { type: GraphQLNonNull(GraphQLInt) },
      family_covered: { type: GraphQLNonNull(GraphQLString) },
      parents_covered: { type: GraphQLNonNull(GraphQLString) },
      maternity_covered: { type: GraphQLNonNull(GraphQLString) },
      gym_membership: { type: GraphQLNonNull(GraphQLString) },
      free_doctor_on_call: { type: GraphQLNonNull(GraphQLString) },
      number_of_paid_leaves: { type: GraphQLNonNull(GraphQLInt) },
      flexible_work_timings: { type: GraphQLNonNull(GraphQLString) },
      remote_work_friendly: { type: GraphQLNonNull(GraphQLString) }
     
    })
  })

  const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This represents a list of users',
    fields: () => ({
      id: { type: GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLNonNull(GraphQLString) },
      email: { type: GraphQLNonNull(GraphQLString) },
      company: { type: GraphQLNonNull(GraphQLString) }
    })
  })

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
   
      company: {
        type: new GraphQLList(CompanyType),
        description: 'List of All Company',
        resolve: () => company
      },
      getcompany: {
        type: CompanyType,
        description: 'A Single Company',
        args: {
          name: { type: GraphQLString }
        },
        resolve: (parent, args) => company.find(company => company.name === args.name)
      },
      getcompetitors:{
        type: new GraphQLList(CompanyType),
        description: 'competitors of the company',
        args: {
          name:{type:GraphQLString},
          industry:{type:GraphQLString},
          number_of_employees:{type:GraphQLInt}
        },
        resolve: (parent, args) => {

            const result=company.filter(company => ((company.name).toLowerCase() != (args.name).toLowerCase() &&
            (company.industry).toLowerCase() === (args.industry).toLowerCase() &&
            company.number_of_employees >= args.number_of_employees ));

            result.sort((a, b) => a.number_of_employees - b.number_of_employees);
            return result;
        }
      },
      user: {
        type: new GraphQLList(UserType),
        description: 'List of All User',
        resolve: () => user
      }
  })
})

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({

    addCompany: {
        type: CompanyType,
        description: 'Add a Company',
        args: {
         
            username: { type: GraphQLNonNull(GraphQLString) },
            useremail: { type: GraphQLNonNull(GraphQLString) },
            name: { type: GraphQLNonNull(GraphQLString) },
            website: { type: GraphQLNonNull(GraphQLString) },
            number_of_employees: { type: GraphQLNonNull(GraphQLInt) },
            funding_stage: { type: GraphQLNonNull(GraphQLString) },
            industry: { type: GraphQLNonNull(GraphQLString) },

            health_insurance: { type: GraphQLNonNull(GraphQLString) },
            sum_insured: { type: GraphQLNonNull(GraphQLInt) },
            family_covered: { type: GraphQLNonNull(GraphQLString) },
            parents_covered: { type: GraphQLNonNull(GraphQLString) },
            maternity_covered: { type: GraphQLNonNull(GraphQLString) },
            gym_membership: { type: GraphQLNonNull(GraphQLString) },
            free_doctor_on_call: { type: GraphQLNonNull(GraphQLString) },
            number_of_paid_leaves: { type: GraphQLNonNull(GraphQLInt) },
            flexible_work_timings: { type: GraphQLNonNull(GraphQLString) },
            remote_work_friendly: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: (parent, args) => {
          const newcompany = { 
             id: company.length + 1,
             name: args.name,
             website : args.website,
             number_of_employees : args.number_of_employees,
             funding_stage : args.funding_stage,
             industry : args.industry,

             health_insurance : args.health_insurance,
             sum_insured: args.sum_insured,
             family_covered: args.family_covered,
             parents_covered: args.parents_covered,
             maternity_covered: args.maternity_covered,
             gym_membership : args.gym_membership,
             free_doctor_on_call : args.free_doctor_on_call,
             number_of_paid_leaves : args.number_of_paid_leaves,
             flexible_work_timings : args.flexible_work_timings,
             remote_work_friendly : args.remote_work_friendly

            }
          company.push(newcompany)
         
          const newuser={
            id: user.length + 1,
            name:args.username,
            email:args.useremail,
            company: args.name
          }
          user.push(newuser)

          return newcompany
        }
      },
      editCompany: {
        type: CompanyType,
        description: 'Edit a Company',
        args: {
          id: { type: GraphQLNonNull(GraphQLInt) },
          name: { type: GraphQLNonNull(GraphQLString) },
          website: { type: GraphQLNonNull(GraphQLString) },
          number_of_employees: { type: GraphQLNonNull(GraphQLInt) },
          funding_stage: { type: GraphQLNonNull(GraphQLString) },
          industry: { type: GraphQLNonNull(GraphQLString) },    
          health_insurance: { type: GraphQLNonNull(GraphQLString) },
          sum_insured: { type: GraphQLNonNull(GraphQLInt) },
          family_covered: { type: GraphQLNonNull(GraphQLString) },
          parents_covered: { type: GraphQLNonNull(GraphQLString) },
          maternity_covered: { type: GraphQLNonNull(GraphQLString) },
          gym_membership: { type: GraphQLNonNull(GraphQLString) },
          free_doctor_on_call: { type: GraphQLNonNull(GraphQLString) },
          number_of_paid_leaves: { type: GraphQLNonNull(GraphQLInt) },
          flexible_work_timings: { type: GraphQLNonNull(GraphQLString) },
          remote_work_friendly: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: (parent, args) => {
          const newcompany = { 
             id:args.id,
             name: args.name,
             website : args.website,
             number_of_employees : args.number_of_employees,
             funding_stage : args.funding_stage,
             industry : args.industry,
             health_insurance : args.health_insurance,
             sum_insured: args.sum_insured,
             family_covered: args.family_covered,
             parents_covered: args.parents_covered,
             maternity_covered: args.maternity_covered,
             gym_membership : args.gym_membership,
             free_doctor_on_call : args.free_doctor_on_call,
             number_of_paid_leaves : args.number_of_paid_leaves,
             flexible_work_timings : args.flexible_work_timings,
             remote_work_friendly : args.remote_work_friendly

            }
        
            company[args.id-1]=newcompany;

          return newcompany
        }
      }
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})
app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(5000, () => console.log('Server Running'))