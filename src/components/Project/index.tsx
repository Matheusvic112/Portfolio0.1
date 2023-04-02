import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      )

      const json = await data.json();

      setRepositories(json);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  return (
    <>

        <ProjectWrapper>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
          >
                WebAgenda

          </Text>



          <Text type="body1" color="grey2" >
          </Text>
            <ProjectStack>
              <Text type="body2">Linguagem:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                    TypeScript
                </Text>
              </ProjectStackTech>
            </ProjectStack>

          <ProjectLinks>
            <ProjectLink target="_blank" href={"https://github.com/Matheusvic112/WebAgenda/tree/main/front-m6"}>
              <FaGithub /> Github Code
            </ProjectLink>
          
              <ProjectLink target="_blank" href={"https://front-fullstack-rosy.vercel.app"}>
                <FaShare /> Aplicação
              </ProjectLink>
   
          </ProjectLinks>
        </ProjectWrapper>
        <ProjectWrapper>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
          >
                Kenzie Hub

          </Text>



          <Text type="body1" color="grey2" >
          </Text>
            <ProjectStack>
              <Text type="body2">Linguagem:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                    TypeScript
                </Text>
              </ProjectStackTech>
            </ProjectStack>

          <ProjectLinks>
            <ProjectLink target="_blank" href={"https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-matheus112/tree/featWorkTs"}>
              <FaGithub /> Github Code
            </ProjectLink>
          
              <ProjectLink target="_blank" href={"https://kenzie-hub-two-phi.vercel.app"}>
                <FaShare /> Aplicação
              </ProjectLink>
   
          </ProjectLinks>
        </ProjectWrapper>
        <ProjectWrapper>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
          >
                Champ Tracker Api
          </Text>



          <Text type="body1" color="grey2" >
          </Text>
            <ProjectStack>
              <Text type="body2">Linguagem:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                    TypeScript
                </Text>
              </ProjectStackTech>
            </ProjectStack>

          <ProjectLinks>
            <ProjectLink target="_blank" href={"https://github.com/the-kenzios/champ-tracker-api"}>
              <FaGithub /> Github Code
            </ProjectLink>
          
          </ProjectLinks>
        </ProjectWrapper>
    </>
  );
};
