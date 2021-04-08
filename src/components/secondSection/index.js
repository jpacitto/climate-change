import './secondSection.css';

import { Reveal, Tween } from 'react-gsap';


function SecondSection()
{
    return (
        <section className="secondSection">

            <div className="regions-wrapper">
                
                <div className="regions-items-wrapper">
                    <div className="regions-item">
                        <Reveal repeat>
                            <Tween from={{ opacity: 0 }} delay={ 0.25 }>
                                <div className="regions-background forest"></div>
                            </Tween>
                        </Reveal>

                        <div className="regions-title">Forest.</div>

                    </div>
                    <div className="regions-item">
                        <Reveal repeat>
                            <Tween from={{ opacity: 0 }} delay={ 0.45 }>
                                <div className="regions-background ocean"></div>
                            </Tween>
                        </Reveal>

                        <div className="regions-title">Ocean.</div>
                    </div>
                </div>
                <div className="regions-items-wrapper">
                    <div className="regions-item">
                        <Reveal repeat>
                            <Tween from={{ opacity: 0 }} delay={ 0.55 }>
                                <div className="regions-background weather"></div>
                            </Tween>
                        </Reveal>
                        <div className="regions-title">Weather.</div>
                    </div>
                    <div className="regions-item">
                        <Reveal repeat>
                            <Tween from={{ opacity: 0 }} delay={ 0.35 }>
                                <div className="regions-background society"></div>
                            </Tween>
                        </Reveal>
                        <div className="regions-title">Society.</div>
                    </div>
                </div>

                <Reveal repeat>
                    <Tween from={{ opacity: 0, top: 50}}>
                        <div className="regions-desc">
                            Integer sapien lectus, viverra eget efficitur sit amet, elementum eu sapien. Donec leo diam, fringilla nec tristique ut, venenatis hendrerit eros. Nam dapibus diam a massa viverra euismod. Praesent tempor mattis dictum. Proin feugiat orci eu massa venenatis ullamcorper. Aliquam metus erat, congue eu arcu eget, placerat convallis turpis tempor mattis dictum.
                        </div>
                    </Tween>
                </Reveal>

            </div>
        </section>
    );
}

export default SecondSection;