export function HoverCOmeTextGallery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <img
            src="/Image/Nature.jpg"
            alt="Mountain landscape"
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="mb-1 text-xl font-bold text-white">Mountain Vista</h3>
            <p className="mb-2 text-sm text-gray-200">
              Beautiful mountain landscape at sunset
            </p>
            <p className="text-xs text-gray-300">
              Photo by{" "}
              <a
                href="https://unsplash.com/@peter_mc_greats"
                className="hover:underline"
              >
                Peter McBride
              </a>
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <img
            src="/Image/NewYoor.jpg"
            alt="New York City skyline"
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="mb-1 text-xl font-bold text-white">New York Skyline</h3>
            <p className="mb-2 text-sm text-gray-200">
              The iconic city that never sleeps
            </p>
            <p className="text-xs text-gray-300">
              Photo by{" "}
              <a
                href="https://unsplash.com/@sebastiansvenson"
                className="hover:underline"
              >
                Sebastian Svenson
              </a>
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <img
            src="/Image/lion.jpg"
            alt="Lion resting"
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="mb-1 text-xl font-bold text-white">
              King of the Jungle
            </h3>
            <p className="mb-2 text-sm text-gray-200">
              Majestic lion resting in the wild
            </p>
            <p className="text-xs text-gray-300">
              Photo by{" "}
              <a
                href="https://unsplash.com/@thomaslebhart"
                className="hover:underline"
              >
                Thomas Lebhart
              </a>
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <img
            src="/Image/paradise.jpg"
            alt="Tropical beach"
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="mb-1 text-xl font-bold text-white">Tropical Paradise</h3>
            <p className="mb-2 text-sm text-gray-200">
              White sand beach with turquoise water
            </p>
            <p className="text-xs text-gray-300">
              Photo by{" "}
              <a
                href="https://unsplash.com/@kristapsungurs"
                className="hover:underline"
              >
                Kristaps Ungurs
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SImpleImageGallery() {
  return (
    <div className="container mx-auto py-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        <div className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Image/Gallery/Gallery3.jpeg"
            alt="Desert landscape"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Image/Gallery/Gallery5.jpeg"
            alt="Ocean waves"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Image/Gallery/GalleryImage1.jpeg"
            alt="Mountain view"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img
            src="/Image/Gallery/GalleryImage2.jpeg"
            alt="Tropical beach"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export function MixedImageGallery() {
  return (
    <div className="container mx-auto px-5 py-2">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
              src="https://picsum.photos/600/600?random=1"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
              src="https://picsum.photos/600/600?random=2"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
              src="https://picsum.photos/1200/600?random=3"
            />
          </div>
        </div>

        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
              src="https://picsum.photos/1200/600?random=4"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
              src="https://picsum.photos/600/600?random=5"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
              src="https://picsum.photos/600/600?random=6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PaloridGallery(){
    return(
        <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

     <div className="bg-white p-4 pb-8 rounded shadow-lg rotate-1 hover:rotate-0 transition-all duration-300">
      <img
        src="https://picsum.photos/300?random=1"
        alt="Random 1"
        className="w-full aspect-square object-cover border border-gray-100"
        loading="lazy"
      />
    </div>

     <div className="bg-white p-4 pb-8 rounded shadow-lg -rotate-1 hover:rotate-0 transition-all duration-300">
      <img
        src="https://picsum.photos/300?random=2"
        alt="Random 2"
        className="w-full aspect-square object-cover border border-gray-100"
        loading="lazy"
      />
    </div>

     <div className="bg-white p-4 pb-8 rounded shadow-lg rotate-2 hover:rotate-0 transition-all duration-300">
      <img
        src="https://picsum.photos/300?random=3"
        alt="Random 3"
        className="w-full aspect-square object-cover border border-gray-100"
        loading="lazy"
      />
    </div>

     <div className="bg-white p-4 pb-8 rounded shadow-lg -rotate-2 hover:rotate-0 transition-all duration-300">
      <img
        src="https://picsum.photos/300?random=4"
        alt="Random 4"
        className="w-full aspect-square object-cover border border-gray-100"
        loading="lazy"
      />
    </div>

     <div className="bg-white p-4 pb-8 rounded shadow-lg rotate-3 hover:rotate-0 transition-all duration-300">
      <img
        src="https://picsum.photos/300?random=5"
        alt="Random 5"
        className="w-full aspect-square object-cover border border-gray-100"
        loading="lazy"
      />
    </div>

     <div className="bg-white p-4 pb-8 rounded shadow-lg -rotate-3 hover:rotate-0 transition-all duration-300">
      <img
        src="https://picsum.photos/300?random=6"
        alt="Random 6"
        className="w-full aspect-square object-cover border border-gray-100"
        loading="lazy"
      />
    </div>

     <div className="bg-white p-4 pb-8 rounded shadow-lg rotate-1 hover:rotate-0 transition-all duration-300">
      <img
        src="https://picsum.photos/300?random=7"
        alt="Random 7"
        className="w-full aspect-square object-cover border border-gray-100"
        loading="lazy"
      />
    </div>

     <div className="bg-white p-4 pb-8 rounded shadow-lg -rotate-2 hover:rotate-0 transition-all duration-300">
      <img
        src="https://picsum.photos/300?random=8"
        alt="Random 8"
        className="w-full aspect-square object-cover border border-gray-100"
        loading="lazy"
      />
    </div>

  </div>
</div>

    )
}

export function HorizontalSccroll(){
    return(
        <div className="relative w-full overflow-hidden py-8">
  <div className="flex snap-x snap-mandatory overflow-x-auto gap-4 px-4 pb-4">
     <div className="flex-none snap-center w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4">
      <img
        src="https://picsum.photos/800/600?random=1"
        alt="Gallery image 1"
        className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>

     <div className="flex-none snap-center w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4">
      <img
        src="https://picsum.photos/800/600?random=2"
        alt="Gallery image 2"
        className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>

     <div className="flex-none snap-center w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4">
      <img
        src="https://picsum.photos/800/600?random=3"
        alt="Gallery image 3"
        className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>

     <div className="flex-none snap-center w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4">
      <img
        src="https://picsum.photos/800/600?random=4"
        alt="Gallery image 4"
        className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>

     <div className="flex-none snap-center w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4">
      <img
        src="https://picsum.photos/800/600?random=5"
        alt="Gallery image 5"
        className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>

     <div className="flex-none snap-center w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4">
      <img
        src="https://picsum.photos/800/600?random=6"
        alt="Gallery image 6"
        className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>
  </div>

   <div className="text-center text-sm text-gray-500 mt-2">
    ← Scroll horizontally →
  </div>
</div>

    )
}