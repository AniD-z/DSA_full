import React from "react";
import "./Events_landing.css";
import { useNavigate } from 'react-router-dom';
export default function Events_landing() {
  const navigate = useNavigate();

  const handleClick1 = () => {

    navigate(`/array`);
  };
  const handleClick2 = () => {

    navigate(`/stack`);
  };
  const handleClick3 = () => {

    navigate(`/que`);
  };
  const handleClick4 = () => {

    navigate(`/ll`);
  };
  const handleClick5 = () => {

    navigate(`/avlTree`);
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
                  You find yourself locked in a digital vault with a screen displaying an array. The array represents a combination lock to the vault door. You must manipulate the array to match the target sequence displayed on another screen to unlock the door and escape.
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
                You are presented with three stacks. You must use these stacks to sort and submit a sequence of elements that match the target sequence displayed on the control panel to unlock the door and escape.
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
                You see a queue of people standing outside... You have to let them in one at a time, then arrange them such that no two Males are next to each other, only then can you leave the room.
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
                You must create a sequence where the sum of two consecutive numbers is always a prime number. The sequence must start with the smallest number and use all nodes. Can you solve the puzzle and move onto the next room?
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
                You see a diagram on the wall... and you're given a set of elements from 1 to 10. 
I6, D2, I6, D3. This code is scribbled next to the diagram on the wall, you realize that you have to follow some order of insertions and deletions to somehow match the diagram to leave this cave you've been locked into.

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
                Open level to find out!
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
