import { useState } from 'react';
import '../../design.css'
import Button from 'react-bootstrap/Button';
import WorkCard from './WorkCard';

export default function WorkPage(){
    const [softwareTab, setSoftwareTab] = useState(true)
    
    
    return ( <>
    {softwareTab &&  <Button  className='buttonClass' onClick={() => setSoftwareTab(false)} variant="dark">Software <p style={{fontSize: 10}}>(click me)</p></Button>}
    {!softwareTab && <Button className='buttonClass' onClick={() => setSoftwareTab(true)} variant="dark">Business <p style={{fontSize: 10}}>(click me)</p></Button>}

    {softwareTab && 
        <div style={{display: "flex", justifyContent: "center", float: "left", flexWrap: "wrap", textAlign:"left"}}>
            <WorkCard 
                Company={"Powerex"}
                Title={"Back Office Developer Intern"}
                Description={
                <> 
                • Designed C# console application for data reconciliation with GemBox <br />
                • Migrated finance application from Angular.js to React.js <br />
                • Created Data Download API and SSRS Generator <br />
                <b>Technologies Utilzed: C#, JavaScript, SQL, Azure DevOps</b>
                </>
                }
                Class={"card card-1"}
            />
            <WorkCard 
                Company={"Cascade Aerospace"}
                Title={"Full Stack Developer Intern"}
                Description={
                <> 
                • Created C# and jQuery scheduling application, constructing ASP.NET APIs <br />
                • Implemented data transfer logic, to extract user metadata and save to ERP/custom databases with EntityFramework <br />
                <b>Technologies Utilzed: C#, JavaScript, SQL, LINQ, Postman</b> 
                </>
                }
                Class={"card card-2"}
            />
            <WorkCard 
                Title={"Database and Systems Lead"}
                Company={"UBC Trading Group Quant Team"}
                Description={
                <> 
                • Programmed sector and benchmark multi-regressions against S&P <br />
                • Created Flask backend API to translate data from AWS RDS to engine to dashboard <br />
                <b>Technologies Utilzed: Python, Flask, React, Node.js, JavaScript, Git</b> 
                </>
                }
                Class={"card card-3"}
            />
            <WorkCard 
                Company={"UBC Rocket"}
                Title={"Avionics Team"}
                Description={
                <> 
                • Implemented ground station formatters and linters with Python <br />
                • Researched and documented GPS and altimeter radio configurations for wireless rocket communication<br />
                <b>Technologies Utilzed: Python, Pycharm, Git</b> 
                </>
                }
                Class={"card card-4"}
            />
            </div>
    }
    {!softwareTab && 
        <div style={{display: "flex", justifyContent: "center", float: "left", flexWrap: "wrap", textAlign:"left"}}>
        <WorkCard 
            Company={"IMUNA"}
            Title={"Undersecretary General"}
            Description={
            <> 
            • Executive staff, overseeing logistics of largest MUN conference in world <br />
            • Collaborated with UN Missions to resolve operational challenges <br />
            • Directly managed 20 undergraduate students, facilitating publication of 20+ educational guides
            </>
            }
            Class={"card card-1"}
        />
        <WorkCard 
            Company={"UBC Social Enterprise Club"}
            Title={"Vice President, Conference"}
            Description={
            <> 
            • Proposed and acquired $2000 funding through extensive pitches <br />
            • Directly oversaw team of 4 undergraduate students in organizing sustainability based conference <br />
            </>
            }
            Class={"card card-2"}
        />
        <WorkCard 
            Title={"Vice President, Internal"}
            Company={"UBC Men's Mental Health Club"}
            Description={
            <> 
            • Produced weekly newsletter and contact on mental health resources <br />
            • Planned and facilitated 50+ events aimed at addressing mental health struggles and developing community <br />
            </>
            }
            Class={"card card-3"}
        />
        <WorkCard 
            Company={"GEOMUN"}
            Title={"Founder, Secretary General"}
            Description={
            <> 
            • Founded and organized international UNHCR-partnered non-profit, raising $2000+ for charity<br />
            • Coordinated global team of 40+ staff across 16 countries to host 3-day conference<br />
            </>
            }
            Class={"card card-4"}
        />
        </div>
    }
    <div style={{height: 550}}></div>
    </>)
}