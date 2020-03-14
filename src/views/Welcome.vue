<template>
  <div>
    
   <app-master>

       
     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Order Request</h1>
            <ul class="page-list">
                <li><a href="/">Home</a></li>
                <li>Contact</li>
            </ul>
        </div>
     </app-breadcrumb>


     <!-- contact area start -->
    <div class="register-page-area pd-bottom-100">
        <div class="container">
            <div class="row justify-content-center">
               
                <div class="col-xl-10 col-lg-10 col-md-10">
                    <form class="contact-form-wrap contact-form-bg">
                        <h4>Application Form</h4> <br>
                        <h6>Customers Info</h6>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Name">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Address">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="City">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="State">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Email">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Telephone">
                        </div>
                        <div class="rld-single-input">
                           <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" style="color: #92757d; font-size: 0.9rem" for="inputGroupSelect01">Gender</label>
                                            </div>
                                            <select class="custom-select" v-model='formData.category'  id="inputGroupSelect01">
                                               <option value="female">Female</option>
                                                 <option value="male">Male</option>
                                            </select>
                                            </div>
                        </div> <br>

                        <h6>Order Info</h6>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Description">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Quantity">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Rate">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Amount">
                        </div> <br>

                        <h6>Delivery Info</h6>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Delivery Time">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Delivery Address">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Pickup Location">
                        </div><br>

                        <h6>Others</h6>
                        <div class="rld-single-input">
                                            <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" style="color: #92757d; font-size: 0.9rem" for="inputGroupSelect01">Payment Medium</label>
                                            </div>
                                            <select class="custom-select" v-model='formData.category'  id="inputGroupSelect01">
                                               <option value="inquiry">bank transfer</option>
                                                 <option value="others">Others</option>
                                            </select>
                                            </div>
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Staff Code">
                        </div>
                        <div class="btn-wrap">
                            <button class="btn btn-yellow">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- contact area End -->




    

       
   </app-master>

        


  </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import {seo} from "../Repositories/seo.js"

export default {
  name: "Welcome",
  mixins: [seo],
  data(){
      return {
          formData: {
              fullname: '',
              telephone: '',
              email: '',
              category: '',
              
          }

      }
  },
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
    
    
  },
  created(){
      //   (title, description)
      this.seoMetaData('Home',' '); 

  }
};
</script>


<style>



</style>
