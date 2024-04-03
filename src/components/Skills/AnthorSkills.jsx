import React from 'react'
import { AnthorSkillsData } from '../Global/Data'

const AnthorSkills = ({ describe }) => {
  return (

    <section className="skill" id="skills">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx">
                    <h4>{describe} :</h4>
                    <div className="row iconsSkillsDis mx-5 px-5">
                        {AnthorSkillsData?.map((skill) => (
                            <div key={skill?.id} className="col-6 col-md-3">
                                <div className=" border rounded text-center skill-icon">
                                    {skill?.icon}
                                    <h6 className="mt-2">{skill?.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 

    )
}

export default AnthorSkills