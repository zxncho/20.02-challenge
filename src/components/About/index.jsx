function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img
          src="src\assets\profile-pic.jpg"  
          alt="Tyler Stubbs Picture"  
          style={{ width: "140px", height: "120px", borderRadius: "50%" }}
/>
        </div>
        <p>
        My career up to this point has included many stops and many different skill sets. I started in sales in 2018 directly out of college.
                In the past 5 years, I have gained experience in sales, project management and sales support. My professional story begins in 2016 though
                when I sustained a football injury that ended my career. Instead of playing football that season, I ended up working at the local coffee
                shop instead. This experience was really humbling but also opened me up to a new lifestyle other than that of an athlete that I lived for 
                most of my life up to that point.
        </p>
        <p>
        This change in lifestyle opened my eyes to how creative I could get when it comes to making the life I want to live. Then fast forward a couple
                years and Covid-19 hits. During the time that this became a global crisis, me and my wife were expecting our first baby. I have never been so 
                frightened in my life. In this time, I was also supporting the implementations for our NetSuit product. While on a project, I ran into
                an issue that had to do with mapping a checkbox through our API. I knew nothing about it but I just asked the questions and played with the 
                technology. I learned how to read script logs, error logs, field mappings and more. I learned until I finally figured out the configuration needed
                to map to checkboxes from our software. 
        </p>
        {/* <p>
        This experience made me curious about how these API's are built. I took on a solutions consultant role with hopes that I would be able to get into 
                the technology more. My expectations were not correct and for a year I spent my wheels trying to make myself fit into a sales team. My personality 
                is as such that I can work at anything and be good at it but the small talk and niceties that a sales culture requires is difficult for me.
                After a year of trying to be something I thought I needed to be, I began to intentionally learn more about myself and in that process assess
                my weaknesses, strengths and passions.  One of the questions I asked myself was, "Why? I intently explored the reasons that I did what I did.
                I came to the conclusion that I didnt feel comfortable in my current profession because it was missing the thrill of diving into technology like I 
                had in my previous role. Fast forward through a few months of intentionally thinking about my life's path and doing research I landed on going to coding
                bootcamp and now I am here.
        </p> */}
      </div>
    </section>
  );
}

export default About;
