import React, { ReactNode, useState } from 'react';
import ConsoleLine from './console-line';
import LogLine from './log-line';

type CommandLineState = {
  text: ReactNode;
  type: 'LOG'
} | {
  text: string;
  type: 'COMMAND',
  active: boolean;
};

const parseCommand = (argv: string) => {
  const [command, ...args] = argv.split(' ');
  return {
    command,
    args 
  };
}

const HelpRow = ({command, description}: {command: string, description: string}) => (
  <div className="df">
    <span className="db wc1">{command}</span>
    <span>{description}</span>
  </div>
)

const getHelpLines = ():CommandLineState[] => ([
  { type: 'LOG', text: <HelpRow command="aboutme" description="Know what are my interests, where i have been worked, what is my background knowledge." /> },
  { type: 'LOG', text: <HelpRow command="skills" description="Know the technologies that i can perform and what soft skills i have." /> },
  { type: 'LOG', text: <HelpRow command="experience" description="Know where i've been working recently." /> },
  { type: 'LOG', text: <HelpRow command="contactme" description="Start chatting with me and keep in touch on my social medias." /> },
  { type: 'LOG', text: <HelpRow command="posts" description="Look at my blog posts, for sure you will find something to learn." /> },
  { type: 'LOG', text: <HelpRow command="clear" description="Clear the command line." /> },
]);
const getAboutMeLines = (): CommandLineState[] => ([
  {
    type: 'LOG', text: <>
      <h1>Miguel Ángel Romero Gutiérrez</h1>
    </>
  },
  {
    type: 'LOG', text: <>
      <h2>Principal Software Engineering at Globant.</h2>
    </>
  },
  {
    type: 'LOG', text: <>
      <p>
        Miguel is an efficient developer, has a strong knowledge of javascript language and web development from DB,Backend Services and Front end development.
        The principal frameworks that him works are: React, NodeJS, Webpack, Gulp, Handlebars, Typescript. He feels secure with any challange about web programming,
        the major project that he has been worked was Cars.com, one of the biggest web page in America that offers a marketplace that creates connections between cars sellers and buyers.
        In that proyect Miguel developed the web app <span className="magenta">"turbo cars"</span> that offers a search of used cars and the connection with the dealer. The proyect contains a Server Rendering
        technique that offers SEO and an Angular client that performs funcionality to the web components.
      </p>
    </>
  }
]);
const getExperienceLines = (): CommandLineState[] => ([
  {
    type: 'LOG', text: <>
      <p>
        I develop Web UI experiences using recents frameworks.
      </p>
      <p className="f6">
        Latest Projects:
      </p>
      <p>
        July 2019 - 2020
      </p>
      <p>
        <b><a className="green magenta-hover no-underline" href="https://www.lendingclub.com/" target="_blank" rel="noreferrer">LendingClub.</a></b> Lending club is a peer to peer lending company. I help them to develop new Web UI experiences for Borrowers with Personal Loans.
      </p>

      <p>
        January 2021 - Present
      </p>
      <p>
        <b><a className="green magenta-hover no-underline" href="https://www.missionlane.com/" target="_blank" rel="noreferrer">MissionLane.</a></b> MissionLane is a company that provide credit cards to customer with low credit history. I worked on develop new customer ui experiences, integrating flows with microservices and third parties services like tracking tools, a/b testing.
      </p>
    </>
  }
]);
const getContactMeLines = (): CommandLineState[] => ([
  {
    type: 'LOG',
    text: <>
      <p>LinkedIn: <a className="green magenta-hover" href="https://www.linkedin.com/in/miguelromerogutierrez85" target="_blank" rel="noreferrer">@miguelromerogutierrez85</a></p>
      <p>Github: <a className="green magenta-hover" href="https://github.com/miguelromerogutierrez/" target="_blank" rel="noreferrer">@miguelromerogutierrez</a></p>
      <p>Email: <a className="green magenta-hover" href="mailto:miguel.angel.romero.gtz@gmail.com" target="_blank" rel="noreferrer">miguel.angel.romero.gtz@gmail.com</a></p>
      <p>Twitter: <a className="green magenta-hover" href="https://twitter.com/Maikesuun" target="_blank" rel="noreferrer">@Maikesuun</a></p>
      <p>Phone: <a className="green magenta-hover" href="tel:5552994678" target="_blank" rel="noreferrer">5552994678</a></p>
    </>
  }
]);
const getSkillsLines = (): CommandLineState[] => ([
  { type: 'LOG', text: <>
    <p>Skills i can teach:</p>
    <ul>
      <li>Javascript</li>
      <li>React</li>
      <li>Typescript</li>
      <li>Programming Patterns</li>
      <li>Programming Principles</li>
      <li>Css styles</li>
      <li>Search optimization</li>
      <li>Leadership</li>
      <li>Clear thinker</li>
      <li>Focus</li>
      <li>Self-taught</li>
    </ul>
    <p>Skills i can perform:</p>
    <ul>
      <li>Express</li>
      <li>Kotlin</li>
      <li>Bundlers</li>
    </ul>
  </>}
]);
const getPostsLines = (): CommandLineState[] => ([
  { type: 'LOG', text: <>
    <a className="no-underline green magenta-hover" target="_blank" rel="noreferrer" href="https://www.linkedin.com/posts/miguelromerogutierrez85_the-toggle-component-activity-6772894764451921920-S5r3">React: The toggle component</a>
    <br/>
    <a className="no-underline green magenta-hover" target="_blank" rel="noreferrer" href="https://www.linkedin.com/posts/miguelromerogutierrez85_the-state-machine-activity-6775452384513683459-kXSv">React: The State Machine</a>
    <br/>
    <a className="no-underline green magenta-hover" target="_blank" rel="noreferrer" href="https://dev.to/miguelromerogutierrez/react-hooks-intermedian-usestateform-4651">React hooks: useStateForm</a>
    <br/>
    <a className="no-underline green magenta-hover" target="_blank" rel="noreferrer" href="https://iscmike.notion.site/Animation-Component-39d1052fb50245ea86835e6a14fcf80f">React: The animation component</a>
    <br/>
    <a className="no-underline green magenta-hover" target="_blank" rel="noreferrer" href="https://medium.com/@miguel.angel.romero.gtz/apuntes-de-react-patrones-hoc-88e272e770c7">React: The High Order Components</a>
  </>}
]);

const useCommandLine = () => {
  const [commandLines, setCommandLines] = useState<CommandLineState[]>([
    { text: 'Type help or -h to know the commands', type: 'LOG' },
    { active: true, text: '', type: 'COMMAND' },
  ]);
  
  const onCommandSubmit = (argv: string) => {
    const logLines: CommandLineState[] = [];
    const {command} = parseCommand(argv);
    switch(command) {
      case '-h':
      case 'help':
        logLines.push(...getHelpLines());
        break;
      case '-a':
      case 'aboutme':
        logLines.push(...getAboutMeLines());
        break;
      case 'skills':
        logLines.push(...getSkillsLines());
        break;
      case 'experience':
        logLines.push(...getExperienceLines())
        break;
      case 'contactme':
        logLines.push(...getContactMeLines());
        break;
      case 'posts':
        logLines.push(...getPostsLines());
        break;
      case 'clear':
        setCommandLines([
          { text: 'Type help or -h to know the commands', type: 'LOG' },
          { type: 'COMMAND', active: true, text: '' }
        ]);
        return;
      default:
        logLines.push(
          { text: `Command "${command}" not recognized`, type: 'LOG' }
        );
        break;
    }

    setCommandLines([
      ...commandLines.map(cl => ({...cl, active: false})),
      ...logLines,
      { active: true, text: '', type: 'COMMAND'}
    ]);
  };

  return { commandLines, onCommandSubmit };
};

const Console = () => {
  const {commandLines, onCommandSubmit} = useCommandLine();
  return (
    <div className="bg-console-color pa1 w-full h-full o-scroll">
      {commandLines.map((commandLine, index) => commandLine.type === 'LOG' 
        ? <LogLine key={`log-${index}`} text={commandLine.text} />
        : <ConsoleLine key={`command-${index}-${commandLine.text}`} activeLine={commandLine.active} onCommandSubmit={onCommandSubmit} text={commandLine.text} />
      )}
    </div>
  )
};

export default Console;
