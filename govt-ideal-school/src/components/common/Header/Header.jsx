import logo from "../../../assets/logo.png";
export default function Header() {
  return (
    <div className="md:px-6 lg:px-10 xl:px-16 px-4 xl:py-8 lg:py-6 py-4 bg-gradient-to-r from-primary to-secondary flex">
      <div className="flex items-center gap-4 text-white">
        <img src={logo} alt="school logo" className="h-16" />
        <div>
          <h2 className="">ঢাকা সরকারি আদর্শ উচ্চ বিদ্যালয়</h2>
          <h5>
            EIIN No: 12345 | জয় বাংলা রোড, মিরপুর ১১, ঢাকা ১২১৬, বাংলাদেশ।
          </h5>
        </div>
      </div>
    </div>
  );
}
