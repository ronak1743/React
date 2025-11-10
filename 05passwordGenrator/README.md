# Password Genrator Using React:
- Here, First we make react project and add tailwind to it.

- Now here our password is depends on 3 varibles length,number,spacial character so we make 4 usestate variables 

- Then we make basic ui using html+tailwind

- Then we make one password genrator mehord and we use useCallback which is use to optimize memorization of methord we pass 2 things 1)methord it seld,2) array of dependencys

- Then we make use of useEffect hook which is use for call any methord when dependencys change or when relode so we call password genrator callback here

- then we use useRef hook to connect input value then when we click on copy btn we select that text using that useRef. and use window object for copy to clipbord.