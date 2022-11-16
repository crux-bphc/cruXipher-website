import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem("token")) navigate("/login");
  return (
    <div className="px-32 pt-16 pb-8 text-2xl min-h-full text-center">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
      repellendus, perspiciatis commodi autem eligendi possimus maxime magnam
      cum cumque amet temporibus ratione delectus saepe reiciendis facere
      voluptate odit consequuntur vel fuga veniam repudiandae illo eaque fugiat.
      Quisquam sed omnis cum similique, magni quis quia neque unde, esse quidem
      nulla fuga excepturi porro laboriosam adipisci odio natus. Ullam non
      molestiae illo voluptate eos dolore! Excepturi corporis consequatur
      numquam asperiores in. Sint aspernatur nisi qui impedit doloribus non,
      possimus numquam quae adipisci! Excepturi dolore, fugiat totam dicta
      recusandae dolorem iure perspiciatis. Accusamus id accusantium quis
      deserunt, quia officiis qui tenetur rem fuga!
    </div>
  );
};

export default About;
