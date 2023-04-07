import React, { useEffect, useRef, useState } from "react"
import ApplyPosition from "../ApplyPosition";
import { debounce } from "lodash";
import { Container } from "../Container";
import axios from "axios";
import SvgIconStyle from "../SvgIconStyle";
interface Props {
    list: jobList[];
  }
const CareerListSection = ({ list }: Props) => {
    const [search, setSearch] = useState("");
    const [jobs, setJobs] = useState<jobList[]>(list);
    const isMounted = useRef(true);
    const debouncedSearch = React.useRef(
      debounce(async (word) => {
        setSearch(word);
      }, 500)
    ).current;
  
    const getJobs = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`/api/job/${search.trim() ? `?q=${search}` : ""}`);
        setJobs(data as jobList[]);
        // setAllData(data);
      } catch (e) {
        console.error("error", e);
      }
    };
  
    useEffect(() => {
      !isMounted.current && getJobs();
      isMounted.current = false;
    }, [search]);
  return (
    <div>
     <Container className=" mt-16 flex flex-col items-center">
        <div>
        <div className="w-full">
          <h2 className=" text-[28px] leading-[42px] font-medium text-[#4388C8] mb-6">
          Join Our Team
          </h2>
          <div className="relative mt-[27px] max-w-[642px]">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="bg-[#FAFBFC] border border-gray-300 text-gray-500 rounded-[3px] focus:ring-[#669dd0] focus:border-[#669dd0] outline-none block w-full pr-10 pl-2 py-2"
              placeholder="Search Job Roles"
              onChange={(e) => {
                debouncedSearch(e.target.value);
              }}
            />
          </div>
          <div className="flex max-w-[390px] justify-between gap-4 mt-4 items-center">
            <SvgIconStyle src="/Assets/filter.svg" className=" text-[#C2C5D1]" />

      <div>
      <select
        id="location"
        name="location"
        placeholder="Contract Type"
        className="mt-1 block w-full rounded-md border-none bg-[rgba(9,30,66,0.04)] py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        defaultValue=""
      >
      <option value="" disabled hidden>
                Contract Type
              </option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
      <div>
      <select
        id="location"
        name="location"
        placeholder="Experience LeveL"
        className="mt-1 block w-full rounded-md border-none bg-[rgba(9,30,66,0.04)] py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        defaultValue=""
      >
      <option value="" disabled hidden>
                Experience LeveL
              </option>
        <option>Junior</option>
        <option>Mid-LeveL</option>
        <option>Senior</option>
      </select>
    </div>



          </div>
        </div>
        <div className=" flex flex-col gap-[34px] mt-[52px] mb-[14rem]">
          {jobs?.map(({ id, title, description, remote, type, url }) => (
            <ApplyPosition
              key={id}
              id={id}
              title={title}
              description={description}
              locations={`${remote ? "Remote, " : ""} ${type}`}
              url={url}
            />
          ))}
        </div>            
        </div>

      </Container>
    </div>
  )
}

export default CareerListSection
