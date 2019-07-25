import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PriorityCard from "./PriorityCard";
import LocationHolder from "./LocationHolder";
import Header from "./Header";
import edit from "../assets/edit.svg";
import { apiUrl } from '../config';

const PrioritiesPage = ({ orgId, neighborhood }) => {
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${apiUrl}/orgs` //need to filter for orgs in locations
      );
      setPriorities(res.data);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (neighborhood === '') return <Redirect to='/selectNeighborhood' />
  return (
    <div>
      <Header title={"Priorities"} optionIcon={edit} option={"/editPriorities"} optionName={"Edit Priorities"} />
      <LocationHolder hood={neighborhood} />
      <div className="prioritiesPage">
        <ul>
          {priorities.map(priority => (
            <li key={priority.id}>
              <PriorityCard
                type={priority.type}
                description={priority.description}
                rank={priority.rank}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PrioritiesPage.propTypes = {
  orgId: PropTypes.number,
  neighborhood: PropTypes.string,
};

export default PrioritiesPage;
