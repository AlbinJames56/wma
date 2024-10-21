import React, { useState } from 'react'
import './CommittePage.css'
import Committee from '../../../components/userComponents/Committee/Committe';
// const [committee, setCommittee] = useState( [])
const committee=[
  {
    name: 'John Doe',
    position: 'President',
    file: 'https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg',
  },
  {
    name: 'Alice Walker',
    position: 'Secretary',
    file: 'https://americanlibrariesmagazine.org/wp-content/uploads/2015/01/alicewalkerforweb2.jpg',
  },
  {
    name: 'Mathew Devasy',
    position: 'Treasurer',
    file: 'https://i1.sndcdn.com/avatars-000005942097-1jok5y-t240x240.jpg',
  },
  {
    name: 'Jameela',
    position: 'Vice President',
    file: '',
  },
  {
    name: 'Maneesh',
    position: 'Joint Secretary',
    file: '',
  },
  {
    name: 'Robert',
    position: 'Executive Member',
    file: '',
  },
  {
    name: 'Ansari',
    position: 'Executive Member',
    file: '',
  },
  {
    name: 'Muthabiq',
    position: 'Executive Member',
    file: '',
  },
  {
    name: 'ALisha',
    position: 'Executive Member',
    file: '',
  },
]

function CommitteePage() {
  return (  
       <div className="d-flex flex-column align-items-center justify-content-center mt-5 commity-bg">
          {committee.length !== 0 && (
            <>
              <div className="row committe_cards">
                {committee.find((obj) => obj.position === "President") && (
                  <div className="col-lg-4 col-sm-4 col-6 mb-3">
                    <Committee item={committee.find((obj) => obj.position === "President")} />
                  </div>
                )}
                {committee.find((obj) => obj.position === "Secretary") && (
                  <div className="col-lg-4 col-sm-4 col-6 mb-3">
                    <Committee item={committee.find((obj) => obj.position === "Secretary")} />
                  </div>
                )}
                {committee.find((obj) => obj.position === "Treasurer") && (
                  <div className="col-lg-4 col-sm-4  mb-3">
                    <Committee item={committee.find((obj) => obj.position === "Treasurer")} />
                  </div>
                )}
              </div>
    
              <div className="row committe_cards">
                {committee.find((obj) => obj.position === "Vice President") && (
                  <div className="col-lg-6 col-sm-6 col-6 mb-3">
                    <Committee item={committee.find((obj) => obj.position === "Vice President")} />
                  </div>
                )}
                {committee.find((obj) => obj.position === "Joint Secretary") && (
                  <div className="col-lg-6 col-sm-6 col-6 mb-3">
                    <Committee item={committee.find((obj) => obj.position === "Joint Secretary")} />
                  </div>
                )}
              </div>
    
              <div className="committee_title text-center mt-3">
                <span>Executive Committee Members</span>
              </div>
    
              <div className="row committe_cards">
                {committee.map((item, key) =>
                  item.position === "Executive Member" ? (
                    <div className="col-lg-3 col-sm-3 col-6 mb-3" key={key}>
                      <Committee item={item} />
                    </div>
                  ) : null
                )}
              </div>
            </>
          )}
        </div> 
      );
    }
     

export default CommitteePage