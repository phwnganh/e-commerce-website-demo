import qrCode from "../../assets/qrcode.jpg";
import ggPlay from "../../assets/ggplay.jpg";
import appStore from "../../assets/appstore.jpg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedln from "../../assets/linkedlin.svg";
import send from "../../assets/send.svg";
import copyRight from "../../assets/icon-copyright.svg";
const FooterSection = () => {
  return (
    <footer className="bg-black text-text-1 pb-6 lg:pt-20 pt-3">
      <div className="max-w-[1170px] mx-auto lg:flex lg:flex-row sm:grid sm:grid-cols-2 flex flex-col gap-21 mb-15 p-5 sm:p-6 lg:p-0 text-center sm:text-start">
        {/* exclusive */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-2xl">Exclusive</h4>
            <h5 className="text-xl">Subscribe</h5>
            <p>Get 10% off your first order</p>
          </div>
          <div className="flex flex-row gap-8 justify-between items-center border-text-1 border-[1.5px] rounded-sm p-3">
            <input
              type="text"
              className="text-white-opacity-40 sm:max-w-[130px] focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="w-8 flex justify-center items-center cursor-pointer">
              <img
                src={send}
                alt="send"
                className="w-auto h-auto"
              />
            </button>
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
              <div className="w-20 aspect-square border-[2.5px]">
                <img
                  src={qrCode}
                  alt="qrCode"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="border-[0.6px] border-text-1 rounded-sm max-w-30 aspect-3/1 overflow-hidden">
                  <img
                    src={ggPlay}
                    alt="google-play"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="border-[0.6px] rounded-sm max-w-30 aspect-3/1  border-text-1 overflow-hidden">
                  <img
                    src={appStore}
                    alt="app-store"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 justify-center sm:justify-start">
            <button className="w-6 h-6 flex justify-center items-center cursor-pointer">
              <img
                src={facebook}
                alt="facebook-icon"
                className="w-auto h-auto"
              />
            </button>
            <button className="w-6 h-6 flex justify-center items-center cursor-pointer">
              <img src={twitter} alt="twitter-icon" className="w-auto h-auto" />
            </button>
            <button className="w-6 h-6 flex justify-center items-center cursor-pointer">
              <img
                src={instagram}
                alt="instagram-icon"
                className="w-auto h-auto"
              />
            </button>
            <button className="w-6 h-6 flex justify-center items-center cursor-pointer">
              <img
                src={linkedln}
                alt="linkedln-icon"
                className="w-auto h-auto"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white-opacity-40">
        <div className="flex flex-row justify-center gap-1.5 text-center mt-4 text-white-opacity-60">
          <img
            src={copyRight}
            alt="copyright-icon"
            className="opacity-60"
          />
          <span>Copyright Rimel 2022. All right reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
