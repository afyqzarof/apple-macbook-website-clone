import laptopSilver from "../assets/images/laptop-silver.jpeg";
import chevronBlue from "../assets/icons/chevron-blue.svg";
import m3 from "../assets/icons/m3.png"
const ProductCard = () => {
  return (
    <article className="bg-gray rounded-2xl p-6">
      <img src={laptopSilver} alt="laptop" />
      <h3 className="text-xs">Space Grey</h3>
      <div className="my-4 flex gap-3">
        <div className="bg-spaceGray outline-blue h-5 w-5 rounded-full outline outline-2 outline-offset-2"></div>
        <div className="bg-silver h-5 w-5 rounded-full outline-2 outline-offset-2 cursor-pointer"></div>
      </div>
      <img src={m3} alt="m3 chip" className="w-10"/>
      <div className="mt-4">
        <p className="font-title text-lg tracking-wide">8-core CPU</p>
        <p className="font-title text-lg tracking-wide">10-core GPU</p>
        <p className="font-title text-lg tracking-wide">8GB Unified Memory</p>
        <p className="font-title text-lg tracking-wide">512GB SSD Storage¹</p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-xs">14-inch Liquid Retina XDR display²</p>
        <p className="text-xs">
          Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone
          jack, MagSafe 3 port
        </p>
        <p className="text-xs">Magic Keyboard with Touch ID</p>
        <p className="text-xs">14-inch Liquid Retina XDR display²</p>
        <p className="text-xs">14-inch Liquid Retina XDR display²</p>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <p className="font-title text-2xl tracking-wide">RM 7,499.00</p>
        <p className="">or</p>
        <p className="font-title text-2xl tracking-wide">
          RM 312.46/mo.per month for 24 mo.*
        </p>
        <div className="flex items-center gap-2">
          <p className="text-blue cursor-pointer text-xs hover:underline">
            Explore monthly instalment options
          </p>
          <img src={chevronBlue} alt="chevron" className="h-3" />
        </div>
        <div className="mt-8 flex flex-col gap-1">
          <p className="text-sm font-semibold">Add a trade-in</p>
          <p className="text-sm">
            Get credit towards a new Mac when you trade in your eligible
            computer. Or recycle it for free.**
          </p>
          <p className="text-blue cursor-pointer text-xs hover:underline">
            Get started
          </p>
        </div>
        <button className="bg-blue my-4 rounded-lg py-1 text-sm text-white">
          Select
        </button>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Need a moment?</p>
          <p className="text-sm">
            Keep all your selections by saving this device to Your Saves, then
            come back anytime and pick up right where you left off.
          </p>
          <p className="text-blue cursor-pointer text-xs hover:underline">
            Save for later
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Delivery:</p>
          <p className="text-sm">In Stock</p>
          <p className="text-sm">Free Shipping</p>
          <p className="text-blue cursor-pointer text-xs hover:underline">
            Get delivery dates
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
