import Footer from '@/component/footer';
import Header from '@/component/header';
import axios from 'axios';
import productcard from '@/component/productCard';
import Link from 'next/link';
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 991, itemsToShow: 6 },
  { width: 1200, itemsToShow: 6 },
];
function Homepage({ dirs }) {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append('myImage', selectedFile);
      const { data } = await axios.post('/api/image', formData);
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <>
      <Header />
      <div class='top-section pt120 pb80'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <div class='details text-center'>
                <h3 class='font60 clr-white'>FUTUREPEDIA</h3>
                <p class='clr-white font20'>
                  THE LARGEST AI TOOLS DIRECTORY, UPDATED DAILY
                </p>

                <div class='tools-btn'>
                  <a href='#' class='theme-btn'>
                    Tools Added Today <span class='numbers'>30</span>
                  </a>
                  <a href='#' class='theme-btn second'>
                    News Added Today <span class='numbers'>10</span>
                  </a>
                </div>
                <div class='search-form-box'>
                  <div class='inner-form'>
                    <div class='search-box'>
                      <input type='text' id='search' placeholder='Search...' />
                      <button type='submit'>
                        <i class='fas fa-search'></i>
                      </button>
                    </div>
                    <div class='shot-by'>
                      <select>
                        <option>Sort By</option>
                        <option>Verified</option>
                        <option>New</option>
                        <option>Popular</option>
                      </select>
                    </div>
                    <div class='fiter-box'>
                      <a
                        href='#'
                        data-bs-toggle='modal'
                        data-bs-target='#filtermodal'
                      >
                        <i class='fas fa-filter'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* start */}
              <div class='container w-40 mx-auto p-4 my-4'>
                <label>
                  <input
                    type='file'
                    hidden
                    id='image'
                    onChange={({ target }) => {
                      if (target.files) {
                        const file = target.files[0];
                        setSelectedImage(URL.createObjectURL(file));
                        setSelectedFile(file);
                      }
                    }}
                  />
                  <div className='w-60 aspect-video rounded d-flex align-items-center justify-content-center border border-2 border-dashed cursor-pointer'>
                    {selectedImage ? (
                      <img src={selectedImage} alt='' />
                    ) : (
                      <span>Select Image</span>
                    )}
                  </div>
                </label>
                <button
                  className='bg-danger p-3 w-10 text-center rounded text-white'
                  onClick={handleUpload}
                  disabled={uploading}
                  style={{ opacity: uploading ? '.5' : '1' }}
                >
                  {uploading ? 'Uploading..' : 'Upload'}
                </button>
                <div className='mt-5 d-flex flex-column my-3'>
                  {dirs?.map(item => (
                    <Link key={item} href={'/images/' + item}>
                      <a className='text-primary text-decoration-underline'>
                        {item}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='activity-sec mt50'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <div class='heading text-center'>
                <h3 class='font35 clr-white'>
                  What Kind of Activity{' '}
                  <span class='clr-red'>do you Want to try?</span>
                </h3>
                <p>
                  Discover best things to do restaurants, shopping, hotels,
                  cafes and places aroundthe world by categories.
                </p>
              </div>
              <div class='categories-box'>
                <div class='owl-carousel owl-theme'>
                  <Carousel breakPoints={breakPoints}>
                    <div class='item'>
                      <div class='cat-name'>
                        <a href='#'>Summarizer</a>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='cat-name'>
                        <a href='#'>Audio editing</a>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='cat-name'>
                        <a href='#'>Avatars</a>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='cat-name'>
                        <a href='#'>Code assistant</a>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='cat-name'>
                        <a href='#'>Fun tools</a>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='cat-name'>
                        <a href='#'>Copywriting</a>
                      </div>
                    </div>
                    <div class='item'>
                      <div class='cat-name'>
                        <a href='#'>Dating</a>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div class='row pt30'>
            <div class='col-lg-6'>
              <div class='main-box'>
                <div class='img'>
                  <a href='#'>
                    <img src='img/img-1.jpg' />
                  </a>
                </div>
                <div class='content'>
                  <div class='top-text'>
                    <h3>
                      <a href='#'>
                        Aidaptive{' '}
                        <span>
                          <i class='fas fa-check-circle'></i>
                        </span>
                      </a>
                    </h3>
                    <div class='likes'>
                      <i class='fas fa-thumbs-up'></i> 37
                    </div>
                  </div>
                  <div class='detail'>
                    <p>
                      Predictive personalization engines fore Commerce and
                      Hospitality
                    </p>
                  </div>
                  <div class='trial-btn'>
                    <a href='#'>
                      <i class='fas fa-lock'></i> Free Trial
                    </a>
                  </div>
                  <div class='tags'>
                    <a href='#'>#Copywriting</a>
                    <a href='#'>#e-commerce</a>
                  </div>
                  <div class='save-btns'>
                    <a href='#'>
                      <img src='img/web.png' />
                    </a>
                    <a href='#'>
                      <img src='img/heart.png' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='main-box'>
                <div class='img'>
                  <a href='#'>
                    <img src='img/img-2.jpg' />
                  </a>
                </div>
                <div class='content'>
                  <div class='top-text'>
                    <h3>
                      <a href='#'>
                        Cohesive{' '}
                        <span>
                          <i class='fas fa-check-circle'></i>
                        </span>
                      </a>
                    </h3>
                    <div class='likes'>
                      <i class='fas fa-thumbs-up'></i> 37
                    </div>
                  </div>
                  <div class='detail'>
                    <p>
                      Predictive personalization engines fore Commerce and
                      Hospitality
                    </p>
                  </div>
                  <div class='trial-btn'>
                    <a href='#'>
                      <i class='fas fa-lock'></i> Free Trial
                    </a>
                  </div>
                  <div class='tags'>
                    <a href='#'>#Copywriting</a>
                    <a href='#'>#e-commerce</a>
                  </div>
                  <div class='save-btns'>
                    <a href='#'>
                      <img src='img/web.png' />
                    </a>
                    <a href='#'>
                      <img src='img/heart.png' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='main-box'>
                <div class='img'>
                  <a href='#'>
                    <img src='img/img-3.jpg' />
                  </a>
                </div>
                <div class='content'>
                  <div class='top-text'>
                    <h3>
                      <a href='#'>
                        IngestAI{' '}
                        <span>
                          <i class='fas fa-check-circle'></i>
                        </span>
                      </a>
                    </h3>
                    <div class='likes'>
                      <i class='fas fa-thumbs-up'></i> 37
                    </div>
                  </div>
                  <div class='detail'>
                    <p>
                      Predictive personalization engines fore Commerce and
                      Hospitality
                    </p>
                  </div>
                  <div class='trial-btn'>
                    <a href='#'>
                      <i class='fas fa-lock'></i> Free Trial
                    </a>
                  </div>
                  <div class='tags'>
                    <a href='#'>#Copywriting</a>
                    <a href='#'>#e-commerce</a>
                  </div>
                  <div class='save-btns'>
                    <a href='#'>
                      <img src='img/web.png' />
                    </a>
                    <a href='#'>
                      <img src='img/heart.png' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='main-box'>
                <div class='img'>
                  <a href='#'>
                    <img src='img/img-4.jpg' />
                  </a>
                </div>
                <div class='content'>
                  <div class='top-text'>
                    <h3>
                      <a href='#'>
                        Quizgecko{' '}
                        <span>
                          <i class='fas fa-check-circle'></i>
                        </span>
                      </a>
                    </h3>
                    <div class='likes'>
                      <i class='fas fa-thumbs-up'></i> 37
                    </div>
                  </div>
                  <div class='detail'>
                    <p>
                      Predictive personalization engines fore Commerce and
                      Hospitality
                    </p>
                  </div>
                  <div class='trial-btn'>
                    <a href='#'>
                      <i class='fas fa-lock'></i> Free Trial
                    </a>
                  </div>
                  <div class='tags'>
                    <a href='#'>#Copywriting</a>
                    <a href='#'>#e-commerce</a>
                  </div>
                  <div class='save-btns'>
                    <a href='#'>
                      <img src='img/web.png' />
                    </a>
                    <a href='#'>
                      <img src='img/heart.png' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='main-box'>
                <div class='img'>
                  <a href='#'>
                    <img src='img/img-5.jpg' />
                  </a>
                </div>
                <div class='content'>
                  <div class='top-text'>
                    <h3>
                      <a href='#'>
                        Audyo{' '}
                        <span>
                          <i class='fas fa-check-circle'></i>
                        </span>
                      </a>
                    </h3>
                    <div class='likes'>
                      <i class='fas fa-thumbs-up'></i> 37
                    </div>
                  </div>
                  <div class='detail'>
                    <p>
                      Predictive personalization engines fore Commerce and
                      Hospitality
                    </p>
                  </div>
                  <div class='trial-btn'>
                    <a href='#'>
                      <i class='fas fa-lock'></i> Free Trial
                    </a>
                  </div>
                  <div class='tags'>
                    <a href='#'>#Copywriting</a>
                    <a href='#'>#e-commerce</a>
                  </div>
                  <div class='save-btns'>
                    <a href='#'>
                      <img src='img/web.png' />
                    </a>
                    <a href='#'>
                      <img src='img/heart.png' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='main-box'>
                <div class='img'>
                  <a href='#'>
                    <img src='img/img-6.jpg' />
                  </a>
                </div>
                <div class='content'>
                  <div class='top-text'>
                    <h3>
                      <a href='#'>
                        GooGPT{' '}
                        <span>
                          <i class='fas fa-check-circle'></i>
                        </span>
                      </a>
                    </h3>
                    <div class='likes'>
                      <i class='fas fa-thumbs-up'></i> 37
                    </div>
                  </div>
                  <div class='detail'>
                    <p>
                      Predictive personalization engines fore Commerce and
                      Hospitality
                    </p>
                  </div>
                  <div class='trial-btn'>
                    <a href='#'>
                      <i class='fas fa-lock'></i> Free Trial
                    </a>
                  </div>
                  <div class='tags'>
                    <a href='#'>#Copywriting</a>
                    <a href='#'>#e-commerce</a>
                  </div>
                  <div class='save-btns'>
                    <a href='#'>
                      <img src='img/web.png' />
                    </a>
                    <a href='#'>
                      <img src='img/heart.png' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(path.join(process.cwd(), '/public/images'));
    props.dirs = dirs || [];
    return { props };
  } catch (error) {
    return { props };
  }
};

export default Homepage;
