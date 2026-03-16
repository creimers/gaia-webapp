/* eslint-disable @next/next/no-img-element */

export default function License() {
  return (
    <div>
      <p>
        This work is licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="license noopener noreferrer"
          style={{ display: "inline-flex" }}
        >
          CC BY 4.0
          <img
            alt="Creative Commons License"
            style={{
              height: "22px",
              marginLeft: 3,
              verticalAlign: "text-bottom",
            }}
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
          />
          <img
            alt="Creative Commons License"
            style={{
              height: "22px",
              marginLeft: 3,
              verticalAlign: "text-bottom",
            }}
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
          />
        </a>
      </p>
    </div>
  );
}
