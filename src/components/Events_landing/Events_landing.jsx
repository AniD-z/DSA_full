import React from "react";
import "./Events_landing.css";
import { useNavigate } from 'react-router-dom';
export default function Events_landing() {
  const navigate = useNavigate();

  const handleClick1 = () => {

    const parameterObject = { qn: 'On the 17th of August, 2017, someone has stolen the locker keys of another member in the gym lounge accessible to only those with a silver membership. From the CCTV footage, the culprit had never been seen before or after this date, can you find the culprit?', ans: 'Rigoberto Hartgrave' };
    const parameterString = btoa(encodeURIComponent(JSON.stringify(parameterObject)))

    navigate(`/input?param=${parameterString}`);
  };
  const handleClick2 = () => {

    const parameterObject = { qn: `A woman named Noemi Malamud has been kidnapped! Reports state that the kidnapper was a red haired female in her 20s. She drove away in a Mercedes car of unknown model. A witness also claims that the kidnapper did not have black eyes. The victim was last seen in SQL City, April 17th, 2018.The victim's husband has hired you to find the culprit, claiming that the cops were unhelpful.`, ans: 'Lara Beeman' };
    const parameterString = btoa(encodeURIComponent(JSON.stringify(parameterObject)))

    navigate(`/input?param=${parameterString}`);
  };
  const handleClick3 = () => {

    const parameterObject = { qn: `A petty theft was committed as you were on your way home. You remember that the plate number of the car started and ended with the number '3', and that there was an 'A' somewhere in between. You caught a glimpse of green as the culprit took a turn. Can you identify the culprit?`, ans: 'Claudie Iuchs' };
    const parameterString = btoa(encodeURIComponent(JSON.stringify(parameterObject)))

    navigate(`/input?param=${parameterString}`);
  };
  const handleClick4 = () => {

    const parameterObject = { qn: `A professional con artist has been impersonating people to gather sensitive information, the only lead the cops were able to find is that this person has been quite active on social media. There is also a good chance that the con artist is a woman. Can you find this culprit with just this information?`, ans: 'Otha Mallinson' };
    const parameterString = btoa(encodeURIComponent(JSON.stringify(parameterObject)))

    navigate(`/input?param=${parameterString}`);
  };
  const handleClick5 = () => {

    const parameterObject = { qn: `A jewelry store was robbed in SQL City, from the crime reports, the cops have identified the suspect's first name to be Johnathan, a blonde haired elderly individual. However, they are unable to find the car he escaped in. You've been given the job to find the car plate number of the suspect, so that the investigation can proceed.`, ans: 'LG5B44' };
    const parameterString = btoa(encodeURIComponent(JSON.stringify(parameterObject)))

    navigate(`/input?param=${parameterString}`);
  };
  const handleClick6 = () => {

    const parameterObject = { qn: `A crime has taken place and the detective needs your help. The detective gave you the crime scene report, but you somehow lost it. You vaguely remember that the crime was a ​murder​ that occurred sometime on ​Jan.15, 2018​ and that it took place in ​SQL City​. Start by retrieving the corresponding crime scene report from the police department’s database.`, ans: 'Jeremy Bowers' };
    const parameterString = btoa(encodeURIComponent(JSON.stringify(parameterObject)))

    navigate(`/input?param=${parameterString}`);
  };
  return (
    <div className="about-page">
      <div>
        <section class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="level1.gif" alt="" />
              </figure>
              <div class="article-body">
                <h2>Level 1</h2>
                <p>
                  On the 17th of August, 2017, someone has stolen the locker keys of another member in the gym lounge accessible to only those with a silver membership. From the CCTV footage, the culprit had never been seen before or after this date, can you find the culprit?
                </p>
                <a href="#" class="read-more" onClick={handleClick1}>
                  Play-now{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="level2.gif" alt="" />
              </figure>
              <div class="article-body">
                <h2>Level 2</h2>
                <p>
                  A woman named Noemi Malamud has been kidnapped! Reports state that the kidnapper was a red haired female in her 20s. She drove away in a Mercedes car of unknown model. A witness also claims that the kidnapper did not have black eyes. The victim was last seen in SQL City, April 17th, 2018. The victim's husband has hired you to find the culprit, claiming that the cops were unhelpful.
                </p>
                <a href="#" class="read-more" onClick={handleClick2}>
                  Play-now{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="level3.gif" alt="" />
              </figure>
              <div class="article-body">
                <h2>Level 3</h2>
                <p>
                 A petty theft was committed as you were on your way home. You remember that the plate number of the car started and ended with the number '3', and that there was an 'A' somewhere in between. You caught a glimpse of green as the culprit took a turn. Can you identify the culprit?
                </p>
                <a href="#" class="read-more" onClick={handleClick3}>
                  Play-now{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>
            <div class="article-wrapper">
              <figure>
                <img src="level4.gif" alt="" />
              </figure>
              <div class="article-body">
                <h2>Level 4</h2>
                <p>
                 A professional con artist has been impersonating people to gather sensitive information, the only lead the cops were able to find is that this person has been quite active on social media. There is also a good chance that the con artist is a woman. Can you find this culprit with just this information?
                </p>
                <a href="#" class="read-more" onClick={handleClick4}>
                  Play-now{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>
            <div class="article-wrapper">
              <figure>
                <img src="level5.gif" alt="" />
              </figure>
              <div class="article-body">
                <h2>Level 5</h2>
                <p>
               A jewelry store was robbed in SQL City, from the crime reports, the cops have identified the suspect's first name to be Johnathan, a blonde haired elderly individual. However, they are unable to find the car he escaped in. You've been given the job to find the car plate number of the suspect, so that the investigation can proceed.

                </p>
                <a href="#" class="read-more" onClick={handleClick5}>
                  Play-now{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          <article>
            <div class="article-wrapper">
              <figure>
                <img src="hunt_gif.gif" alt="" />
              </figure>
              <div class="article-body">
                <h2>Level 6</h2>
                <p>
               A crime has taken place and the detective needs your help. The detective gave you the crime scene report, but you somehow lost it. You vaguely remember that the crime was a ​murder​ that occurred sometime on ​Jan.15, 2018​ and that it took place in ​SQL City​. Start by retrieving the corresponding crime scene report from the police department’s database.
                </p>
                <a href="#" class="read-more" onClick={handleClick6}>
                Play-now{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
