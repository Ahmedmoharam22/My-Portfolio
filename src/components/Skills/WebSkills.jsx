import React from 'react';
import { webSkills } from '../Global/Data';

const WebSkills = ({ describe }) => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx mx-5">
                            <h4 className='mb-5'>{describe} :</h4>
                            <div className="row iconsSkillsDis mx-5 px-4">
                                {webSkills?.map((skill) => (
                                    <div key={skill?.id} className="col-6 col-md-3 my-2">
                                        <div className="border rounded text-center skill-icon">
                                            {skill?.icon}
                                            <h6 className="fw-bold mt-2">{skill?.title}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebSkills;
