import styles from './ProjectsStyles.module.css'
import gameRoom from '../../assets/game-room.png';
import viberr from '../../assets/viberr.png';
import freshBrgr from '../../assets/fresh-burger.png';
import spring from '../../assets/spring.png';
import ProjectCard from '../../common/ProjectCard';



function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={gameRoom}
            link="https://github.com/feargaldowney/finalyearproject"
            h3="Helping Tim to Talk"
            p="Gamified Speech Therapy App"
            />
            <ProjectCard 
            src={viberr} 
            link="https://github.com/feargaldowney/Jammming"
            h3="Jammming"
            p="Spotify Playlist Creator Web App"
            />
            <ProjectCard 
            src={spring} 
            link="https://github.com/feargaldowney/spring"
            h3="Rental Management Service"
            p="A RESTful web service using Spring Boot and JPA"
            />
            <ProjectCard 
            src={freshBrgr} 
            link="https://github.com/feargaldowney/smithereens"
            h3="Smithereens"
            p="Web app for band featuring ticket sales"
            />
      
        </div>
    </section>
  );
}

export default Projects