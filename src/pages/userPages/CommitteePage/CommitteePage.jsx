import React, { useEffect, useState } from 'react'
import './CommittePage.css'
import Committee from '../../../components/userComponents/Committee/Committe';
import { getCommitteeApi } from '../../../Services/AllApis';
 
function CommitteePage() {   
const [committee, setCommittee] = useState([]);
  useEffect(() => {
    const fetchCommitteeData = async () => {
      try {
        const response = await getCommitteeApi();
        console.log(response);
        
        if (response.status === 200) {
          setCommittee(response.data);
        } else {
          console.error("Failed to fetch committee members");
        }
      } catch (error) {
        console.error("Error fetching committee data:", error);
      }
    };

    fetchCommitteeData();
  }, []);



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