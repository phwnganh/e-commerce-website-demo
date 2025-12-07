import qrCode from "../../assets/qrcode.jpg";
import ggPlay from "../../assets/ggplay.png";
import appStore from "../../assets/appstore.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedln from "../../assets/linkedlin.svg";
import send from "../../assets/send.svg";
import copyRight from "../../assets/icon-copyright.svg";
const FooterSection = () => {
  return (
    <footer className="bg-black text-[#FAFAFA] pb-6 pt-20">
      <div className="max-w-[1170px] mx-auto flex sm:flex-row flex-col gap-21 mb-15 p-5 sm:p-0 text-center sm:text-start">
        {/* exclusive */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-2xl">Exclusive</h4>
            <h5 className="text-xl">Subscribe</h5>
            <p>Get 10% off your first order</p>
          </div>
          <div className="flex flex-row gap-8 justify-between border-[#FAFAFA] border-[1.5px] rounded-sm p-3">
            <input
              type="text"
              className="opacity-40 sm:max-w-[130px]"
              placeholder="Enter your email"
            />
            <div className="w-6 h-6">
              <img src={send} alt="send" className="w-auto h-auto" />
            </div>
          </div>
        </div>
        {/* support */}
        <div className="flex flex-col gap-6 w-full">
          <h5 className="text-xl">Support</h5>
          <div className="flex flex-col gap-4">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        {/* account */}
        <div className="flex flex-col gap-6 w-full">
          <h5 className="text-xl">Account</h5>
          <div className="flex flex-col gap-y-4">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>
        {/* quick link */}
        <div className="flex flex-col gap-6 w-full">
          <h5 className="text-xl">Quick Link</h5>
          <div className="flex flex-col gap-y-4">
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
        {/* download app */}
        <div className="flex flex-col gap-6 w-full">
          <h5 className="text-xl">Download App</h5>
          <div className="flex flex-col gap-2">
            <p className="opacity-70 text-xs">Save $3 with App New User Only</p>
            <div className="flex flex-row gap-2 justify-center sm:justify-start">
              <div className="w-19.5 h-19.5 border-[2.5px]">
                <img src={qrCode} alt="qrCode" />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="border-[0.6px] border-[#FAFAFA] rounded-sm w-[104px]">
                  <img src={ggPlay} alt="google-play " />
                </div>
                <div className="border-[0.6px] rounded-sm w-[104px]">
                  <img src={appStore} alt="app-store" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 justify-center sm:justify-start">
            <div className="w-6 h-6 flex justify-center items-center">
              <img
                src={facebook}
                alt="facebook-icon"
                className="w-auto h-auto"
              />
            </div>
            <div className="w-6 h-6 flex justify-center items-center">
              <img src={twitter} alt="twitter-icon" className="w-auto h-auto" />
            </div>
            <div className="w-6 h-6 flex justify-center items-center">
              <img
                src={instagram}
                alt="instagram-icon"
                className="w-auto h-auto"
              />
            </div>
            <div className="w-6 h-6 flex justify-center items-center">
              <img
                src={linkedln}
                alt="linkedln-icon"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-40 border-t-2">
        <div className="flex flex-row justify-center gap-1.5 text-center mt-4 text-[#FFFFFF] opacity-60">
          <img src={copyRight} alt="copyright-icon" />
          <span>Copyright Rimel 2022. All right reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
