/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Button from "../../components/button";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import ShowCase from "../../components/ShowCase";
import Wrapper from "../../components/Wrapper";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

export default function index() {
  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />

          <Wrapper>
            <div>
              <div className="text-3xl my-8">Connexion</div>
              <div className="grid grid-cols-2 gap-8">
                <LogInForm />
                <SignUpForm/>
              </div>
            </div>
          </Wrapper>

          <Footer />
        </Layout>
      </div>
    </>
  );
}
