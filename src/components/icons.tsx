export function Logo() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="18"
        viewBox="0 0 80 18"
        fill="none"
      >
        <path
          d="M53.7307 5.39365H47.6602L49.4158 0H44.0222L38.1843 17.9788H49.4158C52.0175 17.9788 54.323 16.3079 55.1267 13.8331L56.5862 9.3067C57.1996 7.3819 55.7613 5.39365 53.7307 5.39365ZM51.2349 9.17979L50.0292 12.9236C49.6273 14.1504 48.4851 14.9965 47.1737 14.9965H44.551L46.6873 8.39718H50.6638C51.0656 8.39718 51.3618 8.79906 51.2349 9.17979Z"
          fill="white"
        />
        <path
          d="M63.2067 0L62.0433 3.59577H67.437L68.6003 0H63.2067Z"
          fill="white"
        />
        <path
          d="M57.3688 17.9788H62.7625L66.8447 5.39363H61.4511L57.3688 17.9788Z"
          fill="white"
        />
        <path
          d="M74.9458 8.39718H78.5839L79.5568 5.39366H75.9188L77.6743 0H72.2807L67.7119 14.0658C67.0774 16.0118 68.5368 18 70.5674 18H76.5533L77.5263 14.9965H73.6344C73.2325 14.9965 72.9364 14.5946 73.0633 14.2139L74.9458 8.39718Z"
          fill="white"
        />
        <path
          d="M16.4193 6.28202L22.3205 0H15.9962L11.1314 14.9965H7.07025C6.66837 14.9965 6.37225 14.5946 6.49916 14.2139L11.1102 0H5.71655L1.14781 14.0658C0.513261 16.0117 1.97272 17.9788 4.00327 17.9788H15.552L19.6343 5.39365L16.4193 6.28202Z"
          fill="white"
        />
        <path
          d="M36.3654 0H23.9705L25.7896 6.28202L23.1456 5.39365L19.0634 17.9788H24.457L26.403 11.9929H32.2408C34.8424 11.9929 37.148 10.322 37.9517 7.84724L39.2208 3.91304C39.8554 1.98825 38.4171 0 36.3654 0ZM33.8695 3.78613L32.8542 6.93772C32.4523 8.16451 31.3101 9.01057 29.9987 9.01057H27.3759L29.3219 3.02468H33.2984C33.7214 3.00353 33.9964 3.38425 33.8695 3.78613Z"
          fill="white"
        />
      </svg>
      <p className="w-[80px] text-white text-xs text-right">demo</p>
    </div>
  );
}

export function LeetcodeIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>LeetCode</title>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}