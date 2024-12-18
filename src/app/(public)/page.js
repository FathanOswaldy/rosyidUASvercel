const ItemService = ({
  title,
  subTitle
}) => {
  return (
    <>
      <div className="w-[310px] bg-white p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105">
        <div className="flex justify-center">
          <img src="images/coding.png" alt="Service Image" />
        </div>
        <div className="text-center mt-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="text-[15px] text-[#767676]">{subTitle}</span>
        </div>
      </div>
    </>
  );
}

export default function Dashboard() {
  const myService = [
    { title: 'web development', subTitle: 'blog, e-commerce' },
    { title: 'uI/uX design', subTitle: 'Mobile app, website design' },
    { title: 'sound design', subTitle: 'Voice Over, Beat Making' },
    { title: 'game design', subTitle: 'Character Design, Props & Objects' },
    { title: 'photography', subTitle: 'portrait, product photography' },
    { title: 'advertising', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <>
      {/* Main Layout Background Gradient */}
      <div className="min-h-screen bg-gradient-to-r from-[#ff0000] to-[#000080] p-10">
        {/* Dashboard Container */}
        <div className="flex w-full bg-white rounded-xl shadow-lg p-10">
          {/* Left Side: Profile Information */}
          <div className="flex-1">
            <div className="font-extrabold text-[48px] mt-10">
              <div>Saya Fathan Oswaldy</div>
              <div>
                <span className="text-[#000080]">Mahasiswa</span> LP3I
              </div>
            </div>
            <p className="text-[#767676] mt-3">Saya adalah mahasiswa semester 5 tingkat 3 Yang paling kece</p>
            <button className="btn-primary mt-5 px-4 py-2 rounded-lg bg-[#000080] text-white font-semibold">
              <span className="relative text-sm">Lets Go!</span>
            </button>
          </div>
          {/* Right Side: Avatar */}
          <div className="flex justify-center items-center">
            <img src="images/ocal.jpg" alt="Avatar" className="rounded-full w-40 h-40 object-cover border-4 border-[#000080]" />
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-20 text-center">
          <h2 className="text-[32px] font-bold text-[#000080]">My Services</h2>
          <div className="flex justify-center text-[#767676] mt-4">
            <p className="w-1/2 text-center text-[#FFFFFF]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-rows-2 grid-flow-col gap-6 mt-10">
          {myService.map((item, key) => (
            <ItemService
              key={key}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
}
