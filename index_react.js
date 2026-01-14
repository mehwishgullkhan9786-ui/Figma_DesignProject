import Main2_content from "./components/main2_content";
import Navbar from "./components/Navbar"; 
import Main_content from "./components/main_content";
import Footer from "./components/footer";
import Hero2 from "./components/hero2";
function main() {
    return (
        <div className="App">
        <section className="main">
          <div className="navbar">
            <Navbar />
         </div>
            <Main_content />     
        </section>

        <section className="main2">
            <Main2_content/>

            <div class="hero_heading">
          <h1>Your Innovation Journey in 4 Simple Steps</h1>
         </div>
           <Hero2/>
        </section>
        <section className="hero3">
             <div class="container">
        <h2>Ready to Start Your Innovation Journey?</h2>
        <div class="btns">
          <button class="btn_login">LOGIN</button>
          <button class="btn_create">CREATE NEW ACCOUNT</button>
        </div>
      </div>
        </section>

        <Footer/>
</div> 
    );
}



