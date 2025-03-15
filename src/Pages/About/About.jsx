import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer'
import './About.css'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-container">
                {/* Index Section */}
                <section className="index">
                    <div className="img">
                        <img src="https://placehold.co/1920x1080" alt="Banner" />
                        <div class="custom-shape-divider-bottom-1740212333">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                                preserveAspectRatio="none">
                                <path
                                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                    class="shape-fill"></path>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Navigation Links */}
                <div className="secondary-links">
                    <ul>
                        <li><a href="#principle-msg">Principle's message</a></li>
                        <li><a href="#chairman-msg">Chairman's message</a></li>
                        <li><a href="#know-us">Know us</a></li>
                        <li><a href="#our-goals">Our goals</a></li>
                    </ul>
                </div>

                <section className="principle-msg" id="principle-msg">
                    <h1>Principle's Message</h1>
                    <div className="msg">
                        <img src="https://placehold.co/400x400" alt="Principle" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id sit corrupti qui fuga, hic,
                            assumenda amet eius voluptatum, quae tempora non unde deleniti nostrum! Magni ut, commodi debitis
                            quaerat at, numquam doloremque ullam accusamus illum in aliquam earum cupiditate illo facilis eveniet
                            iusto atque pariatur ad voluptas! Soluta natus ea amet. Iure nostrum natus autem nesciunt error
                            voluptatum, laborum ad nemo dolorum esse ut ipsum incidunt velit fuga neque, nobis possimus distinctio
                            rem. Voluptas dolorum nisi incidunt repudiandae fugiat inventore et voluptatibus illum, error commodi
                            aperiam. Error inventore unde illum quos asperiores incidunt veniam debitis dignissimos! Vitae omnis
                            porro temporibus fugiat ratione officia illo modi, quam minus quis dolores, mollitia exercitationem
                            adipisci dolore, distinctio labore! Corrupti non soluta nihil quis fugit dicta dolores commodi
                            repudiandae blanditiis numquam rem doloribus esse perferendis, molestiae velit nulla natus iusto nobis
                            pariatur placeat! Repellat explicabo reprehenderit aut ut nisi ullam a quisquam repellendus, itaque
                            quasi iusto reiciendis, sed soluta eius sunt aliquid mollitia laboriosam aliquam? Tempora aperiam, nulla
                            veritatis perspiciatis minus quam suscipit iusto eligendi eius ut tenetur nobis sint, cumque, deserunt
                            enim consequatur impedit neque earum nisi repudiandae commodi. Velit dolorem modi deleniti at nisi in,
                            fugit incidunt natus quo repellendus commodi tenetur architecto voluptate eveniet magnam corrupti,
                            dolores cumque asperiores voluptatem. Dolores similique necessitatibus minima? Rem veritatis explicabo
                            dignissimos provident quidem eaque. Obcaecati vero ea odio officia libero magnam voluptate animi ex
                            mollitia tenetur ad cupiditate iusto quos quae nostrum voluptatibus earum, illo temporibus. Molestiae
                            voluptates dignissimos, qui distinctio magni numquam minus debitis quo alias ex, incidunt natus nesciunt
                            deleniti neque ducimus ullam dolor soluta. Recusandae, laudantium quo! Vitae autem, alias aspernatur ex
                            praesentium beatae quia, expedita obcaecati vel temporibus velit. Totam sed atque hic dolorum iusto
                            eveniet corporis minima tempora dolorem placeat asperiores praesentium sit nesciunt distinctio molestias
                            rerum animi consectetur, id quasi quia neque! Architecto quibusdam accusantium expedita totam vitae
                            veritatis dolorum dolore reiciendis dignissimos sed optio quisquam, maiores corrupti voluptates amet ex
                            quod, voluptas illum nobis. Nostrum esse enim nemo expedita? Sed cupiditate molestias maxime, nesciunt
                            placeat sint exercitationem nobis commodi doloribus deserunt quod debitis optio dolores facilis!
                        </p>
                    </div>
                </section>

                <section className="chairman-msg" id="chairman-msg">
                    <h1>Chairman's Message</h1>
                    <div className="msg">
                        <img src="https://placehold.co/400x400" alt="Chairman" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id sit corrupti qui fuga, hic,
                            assumenda amet eius voluptatum, quae tempora non unde deleniti nostrum! Magni ut, commodi debitis
                            quaerat at, numquam doloremque ullam accusamus illum in aliquam earum cupiditate illo facilis eveniet
                            iusto atque pariatur ad voluptas! Soluta natus ea amet. Iure nostrum natus autem nesciunt error
                            voluptatum, laborum ad nemo dolorum esse ut ipsum incidunt velit fuga neque, nobis possimus distinctio
                            rem. Voluptas dolorum nisi incidunt repudiandae fugiat inventore et voluptatibus illum, error commodi
                            aperiam. Error inventore unde illum quos asperiores incidunt veniam debitis dignissimos! Vitae omnis
                            porro temporibus fugiat ratione officia illo modi, quam minus quis dolores, mollitia exercitationem
                            adipisci dolore, distinctio labore! Corrupti non soluta nihil quis fugit dicta dolores commodi
                            repudiandae blanditiis numquam rem doloribus esse perferendis, molestiae velit nulla natus iusto nobis
                            pariatur placeat! Repellat explicabo reprehenderit aut ut nisi ullam a quisquam repellendus, itaque
                            quasi iusto reiciendis, sed soluta eius sunt aliquid mollitia laboriosam aliquam? Tempora aperiam, nulla
                            veritatis perspiciatis minus quam suscipit iusto eligendi eius ut tenetur nobis sint, cumque, deserunt
                            enim consequatur impedit neque earum nisi repudiandae commodi. Velit dolorem modi deleniti at nisi in,
                            fugit incidunt natus quo repellendus commodi tenetur architecto voluptate eveniet magnam corrupti,
                            dolores cumque asperiores voluptatem. Dolores similique necessitatibus minima? Rem veritatis explicabo
                            dignissimos provident quidem eaque. Obcaecati vero ea odio officia libero magnam voluptate animi ex
                            mollitia tenetur ad cupiditate iusto quos quae nostrum voluptatibus earum, illo temporibus. Molestiae
                            voluptates dignissimos, qui distinctio magni numquam minus debitis quo alias ex, incidunt natus nesciunt
                            deleniti neque ducimus ullam dolor soluta. Recusandae, laudantium quo! Vitae autem, alias aspernatur ex
                            praesentium beatae quia, expedita obcaecati vel temporibus velit. Totam sed atque hic dolorum iusto
                            eveniet corporis minima tempora dolorem placeat asperiores praesentium sit nesciunt distinctio molestias
                            rerum animi consectetur, id quasi quia neque! Architecto quibusdam accusantium expedita totam vitae
                            veritatis dolorum dolore reiciendis dignissimos sed optio quisquam, maiores corrupti voluptates amet ex
                            quod, voluptas illum nobis. Nostrum esse enim nemo expedita? Sed cupiditate molestias maxime, nesciunt
                            placeat sint exercitationem nobis commodi doloribus deserunt quod debitis optio dolores facilis!
                        </p>
                    </div>
                </section>

                <section className="know-us" id="know-us">
                    <h1>Know us</h1>
                    <img src="https://placehold.co/1080x600" alt="About us" />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sed? A porro quae, reiciendis recusandae
                        illum labore quo minima obcaecati accusantium facere fugiat dolore animi! Officiis suscipit ea eos laborum
                        ad minima voluptatem porro saepe voluptates quis, expedita et blanditiis labore vitae perferendis fuga,
                        maiores reprehenderit corrupti consequuntur incidunt sapiente itaque illo? Necessitatibus aliquam maiores
                        voluptates earum aperiam voluptatum pariatur repellendus incidunt perferendis quia veritatis asperiores, ea
                        error perspiciatis nam neque impedit aut provident. Laudantium temporibus harum minima pariatur
                        necessitatibus vero sunt impedit iusto aspernatur aliquam reiciendis, facere debitis omnis aperiam qui?
                        Autem, placeat illo explicabo natus ad ipsam. Adipisci, hic magnam laboriosam saepe excepturi tenetur eum
                        vel tempora amet architecto consequuntur velit porro laudantium nostrum cupiditate dolore quidem natus
                        voluptates vero soluta? Distinctio odit libero laudantium quas in maiores consectetur quae, nobis
                        repudiandae hic atque iure minus molestiae culpa. Atque excepturi nobis aliquam mollitia officiis vero
                        assumenda accusantium dolorum, facere, pariatur corporis dolorem fugit, totam sed officia adipisci
                        necessitatibus neque. Tempora, dolor quod ad sapiente praesentium laudantium atque consequuntur perspiciatis
                        ipsa eaque cum numquam! A, mollitia dolore sed ducimus expedita iste? Debitis tempora libero pariatur error
                        culpa, reprehenderit labore totam rem iure sapiente ratione voluptates omnis, eos aliquam nihil soluta vero
                        quasi facere ducimus odio ab? Explicabo odio ipsam quos, saepe tempora accusantium veritatis eos eaque dolor
                        alias. Dicta qui rem incidunt porro, dolorum veritatis maiores, odio voluptate consequuntur alias autem
                        minima rerum id deleniti a commodi quis deserunt aut. Nam culpa fuga quis iste dolorem, reprehenderit
                        aperiam dolore, debitis veniam a optio esse officia, ut consectetur id praesentium autem? Asperiores, modi
                        amet odit recusandae quae hic dolores eligendi dicta quidem et debitis? Nobis sed eos quasi sit, consectetur
                        ipsa eius repellat nemo in iure doloribus aspernatur reiciendis ex praesentium quae est. Dolorum deserunt
                        nisi illum voluptate magni at ducimus earum quisquam, eius repudiandae totam sint debitis ullam quod nemo
                        excepturi odit. Odio doloribus, laudantium vel voluptas rem harum facere quibusdam enim neque fugiat
                        deleniti, error vitae beatae nemo omnis cupiditate quia aperiam sequi? Quo, accusantium saepe deserunt
                        impedit repellat amet illum natus odit recusandae dolor sit odio sapiente modi ex nihil officia porro
                        adipisci et cupiditate fuga dignissimos dolorum? Odit quis pariatur aperiam cupiditate magnam quas! Animi
                        aliquam voluptas, optio quos, provident amet dolorum dolore incidunt, eos dolor est consequatur enim maxime
                        tempora quas illo odit. Possimus, totam. Similique, impedit aliquid. Molestias adipisci rerum, illum eius
                        repellat sequi?
                    </p>
                </section>

                <section className="our-goals" id="our-goals">
                    <h1>Our Goals</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae numquam fugit doloremque cupiditate
                        voluptate aspernatur tempora reprehenderit ut sed fuga optio quis, ullam libero sequi rerum minima
                        laboriosam. Animi, ipsum tenetur? Fugit reprehenderit laborum consequatur, aspernatur sequi possimus
                        suscipit quidem dolore ipsam numquam quis corporis architecto. Voluptates quidem sed officiis vel aspernatur
                        modi eos dignissimos itaque quod reiciendis quasi pariatur qui animi aliquid dolorem fugit ut a, dolor
                        delectus cupiditate blanditiis libero assumenda tempora? Suscipit perspiciatis explicabo earum est, placeat
                        itaque assumenda maiores commodi veniam iste facere. Dolores labore magnam esse dolore et, aut numquam nobis
                        dolorem fugit quo hic!
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;