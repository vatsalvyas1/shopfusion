import withMT from "@material-tailwind/react/utils/withMT";
 
 export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {
      boxShadow: {
        'custom-black': '3px 3px rgba(0, 0, 0, 0.7)',
      }
     },
   },
   plugins: [],
 });