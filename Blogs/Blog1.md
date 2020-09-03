# Evidence Based Softwware Engineering

## 1. Introduction

Software Engineering is an engineering discipline that is concerned with all aspects of software production. Software engineering is a direct sub-field of engineering and has an overlap with computer science and management science. It is also considered a part of overall systems engineering.
Evidence-Based Software Engineering is an approach to software engineering where evidence gathered from research is taken into consideration as it promises a number of benefits by encouraging integration of research results with a view to supporting the needs of many different stakeholder groups [1].
Since late 80s and early 90s, upon research it was found that the failure to organize medical research in systematic review could cost lives [2]. Since then, medical researchers have adopted the evidence-based paradigm. The success of evidence-based medicine has led other fields to adopt the same approach. Successful innovation in a discipline that, like software engineering, attempts to harness scientific advances for the benefit of society, is worth investigating.

## 2. Why evidence is important in software engineering?

As software intensive life-critical systems are taking a central place in our lives, Evidence Based Software Engineering becomes very important. If software can be made more reliable, usable, re-usable and useful, the quality of life of the citizens can be greatly improved. This in turn will make more stakeholders and investors happy which in turn will lead to higher interest and investment in future similar projects. 
There are many ways in which the dependability of software involving adaptation of better software development procedures and practices. At a high level, the Capability Maturity Model and SPICE suggest procedures for improving the software production process [1]. There Are many other high-level strategies but all of them are in some ways limited by the technologies, i.e. methods, tools and procedures that they use.
But to successfully implement this, we need data/evidence and a lot of it at that. In most cases, the software is built with technologies that we have very little usable evidence to begin with. This affects the software in terms of stability, quality, cost and other limitations. This makes it very difficult to predict that using one process will prove better than the others.
Hence data collection to generate useful evidence is very important if Evidence-Based Software Engineering is to provide the mechanisms needed to assist practitioners to adopt appropriate technologies and avoid inappropriate ones [1].

## 3. What does Evidence-Based Software Engineering aim to accomplish?

The goal of Evidence-Based Software Engineering is to provide the means by which current best evidence from research can be integrated with practical experience and human values in the decision-making process regarding the development and maintenance of software [1]. All this needs to lead to these things-

•	Research groups and individual researchers needs to ensure that all their research is directed to the requirements of the industry.

•	There need to be standard means by which industry practitioners can make rational decisions about technology adaptation based on said research.

•	There need to be ways in which the dependability of a software intensive system can be improved.

•	Ensure that software is not the bottleneck for efficient use of these systems.

•	Ensure increased acceptability amongst users.

•	An input to certification processes.

## 4. Evidence-Based Software Engineering in practice.

As the Medical Field is considered one of the most successful industries to adopt an evidence-based methodology, a lot of the inspiration for the practice of evidence-based methodologies comes from Evidence-Based Medicine. A part of the reason for this for might be the ease with which the basic steps taken in Evidence-Based Medicine can be adopted to other fields. Sackett et al [3]. identify 5 steps that are needed too practice Evidence-Based Medicine. These steps are shown in Table 1 below along with the viewpoint of Software-Based Software Engineering
|Steps|Evidence-Based Medicine|Evidence-Based Software Engineering|
|---|---------|--------------|
|1|Converting the need for information (about prevention, diagnosis, prognosis, therapy, causation, etc.) into an answerable question.|Converting the need for information (about development and maintenance methods, management procedures etc.) into an answerable question.|
|2|Tracking down the best evidence with which to answer that question.|Tracking down the best evidence with which to answer that question.|
|3|Critically appraising that evidence for its validity (closeness to the truth), impact (size of the effect), and applicability (usefulness in our clinical practice).|Critically appraising that evidence for its validity (closeness to the truth), impact (size of the effect), and applicability (usefulness in software development practice)|
|4|Integrating the critical appraisal with our clinical expertise and with our patient's unique biology, values and circumstances.|Integrating the critical appraisal with our software engineering expertise and with our stakeholders’ values and circumstances.|
|5|Evaluating our effectiveness and efficiency in executing Steps 1-4 and seeking ways to improve them both for next time.|Evaluating our effectiveness and efficiency in executing Steps 1-4 and seeking ways to improve them both for next time.|
_This is taken verbatim from here: [1]_

In software engineering, the main concern is not the specific task to which the technology is applied to, but rather the outcome of the project of which the task is a part. In Evidence-Based Software Engineering there are 3 important viewpoints:

1.	Viewpoint of the individual practitioner who gets to pick the technologies that they are going to use.

2.	Viewpoint of the Project Manager who wants to achieve a favorable outcome for a particular project.

3.	Viewpoint of the Senior Manager who wants to improve the performance of the department as a whole.

These viewpoints take into account everything from the base developer to the entire department.
To make as much progress as possible, researchers need to

•	Improve the standard of individual empirical studies and systematic reviews of such studies.

•	Identify the outcome measures that are meaningful to practitioners.

•	Report their results in a manner accessible to practitioners.

•	Perform and report replication studies.

Let us now look at each of the steps in Table 1 at a much deeper level.

### a. Defining an answerable question.
1.	The study factor (e.g. the intervention, diagnostic test or exposure).


2.	The population (the disease group or spectrum of the well population).

3.	The outcomes.

Medical practitioners are usually interested in the outcomes as they usually concentrate more on the first two parts. Though these are based on Evidence-Based Medicine, these also apply to Evidence-Based Software Engineering. The question needs to be broad enough. The study factor for Evidence-Based Software Engineering is the technology of interest. The technology should not be too abstract, for example design methods or software lifecycle, but more general and relevant to identify majority of relevant empirical studies like OO methods, Agile Methods or in some cases even a bit more specific like Contract-based specification, pair programming, etc. It is significantly difficult to determine the correct level of abstraction for specifying the population of interest. The population of interest may be categorized in many dimensions based on experience of technology users, types of problem addressed by the technology, application area, etc. [1]. However, even fairly broad categories may be counter-productive if useful empirical evidence is lost by restrictions imposed by such categorization.

### b.	Finding the best evidence.
The main reason to put so much effort into designing a precise question is that it helps researchers and practitioners find all relevant studies. As of 2017, According to the data from the Scopus publication database, as analyzed in several recent studies, more than 70,000 papers have been published in the area of Software Engineering (SE) since late 1960’s [4]. A major problem is finding relevant papers from such a massive amount. Medical researchers and practitioners use a 2-stage process:

1.	They look at already published systematic reviews, i.e. papers that have already researched and assembled all relevant reports on a particular topic.

2.	They use the question of interest to construct search strings aimed at finding relevant individual studies.

These steps are relatively easy for the medical community as they have a massive advantage with several organizations, countries, etc. already working on this. Software Engineering has nowhere near the same amount of resources as the medical field. We, however, do have organizations like IEEE with their IEEE Xplore database and ACM with their Digital Library that serve as a database for scholarly articles in the field of Software Engineering. The articles are indexed by authors’ names and keywords and usually have links to abstracts and sometimes the original article [1]. Such indexing makes it easier to search for information regarding any relevant topic a specific question.

### c.	Critically appraising the evidence.
Medical research has recognized that single studies and even double-blinded randomized controlled trials are insufficient to properly qualify a medical treatment. The focus is now and evidence accumulation via independent experiments. This, however, is contrasted by empirical Software Engineering. The current evidence related to Software Engineering technologies is

•	Fragmented and limited: Even though many individual researchers undertake valuable empirical studies, their scope is often limited to the individual publication, post-graduate theses, etc. There is sometimes little sense to the overall purpose to such studies. Without having a research culture that strongly advocates systematic reviews and replication, it is easy for researchers to undertake research in their own areas of interest rather than contribute to a wider research agenda [1].

•	Not properly integrated: As of right now, there are currently no universally agreed upon standards for systematic reviews in Software Engineering. Most PhD students undertake a review of the “state of the art” in their research, the papers produced by this are of variable quality. Also, there are very insignificant attempts at using “meta-analysis” techniques, which is a more rigorous form of systematic review. In general, there are few incentives to undertake replication studies in spite of their importance in terms of the scientific method [5].

•	Without agreed standards: As stated earlier, there are currently no accepted standard guidelines or standard protocols for conduction individual experiments. The recent dispute between Berry and Tichy [6] and Sobel and Clarkson [7] over the conduct of an experiment into formal methods [8] makes it clear that empirical software engineering is badly in need of guidelines and protocols. Kitchenham et al. [9] proposed some preliminary guidelines for formal experiments and surveys. However, they do not address observational, and investigatory studies. Furthermore, because they attempt to address several different types of empirical study, the guidelines are not as specific, nor as detailed as the CONSORT statement [1].

### d.	Integrating the critical appraisal with software engineering expertise
In the medical field, the practitioner decides what evidence and technology to use based on the specific patient. Although there are opportunities for individual software engineers and managers to adopt EBSE principles, the decision to adopt a technology is often an organizational issue that is influenced by factors such as the organizational culture, the experience and skill of the individual software developers, the requirements of clients, project constraints, and the extent of training required [1]. There is a need to adopt Evidence-Based Software Engineering in organizations that have a strong commitment to process improvement. However, this is currently not happening owing to research results being not in wide-spread use in the industry or having no perceived value to stakeholders.

e.	Evaluation of process
For Evidence-Based Software Engineering, evaluation consists of propagating successful technologies and discouraging/preventing the spread of unsuccessful technologies. There are a few issues here that need to be noted:

1.	In a competitive industry like software engineering, there is little to no incentive to help your competitors. This discourages the use of evidence and making it public.

2.	It is difficult for experiences with a particular technology to be disentangled from that particular use and be viewed in a much more broad and general case.

With the industry being what it is, everyone wants a competitive edge which discourages the steps necessary for evidence procurement, validation and implementation that Evidence-Based Software Engineering relies so heavily upon.

## 5.	The goal, the obstacles and the current scenario.
From what we have discussed so far, it is clear that Evidence-Based Software Engineering is far from widespread adaptation. It cannot be achieved without extensive collaboration and long-term commitment from among individual research groups worldwide and active support from other stakeholders like practitioners in industries, certification bodies, etc. [1]. The main obstacles that are stopping the industry from full-scale implementation of Evidence-Based Software Engineering are:

•	The Skill Factor: The skill ceiling for mastering the core concepts of software engineering is high enough on its own and assuming an evidence-based approach only adds to it. Some steps that we can take to address this issue are:

1.	Develop and adopt new experimental protocols that reduce experimenter and subject bias. We need to have more widespread yet anonymous testing with more such tests done on new technologies.

2.	Use a better and more well-suited method of experiment evaluation. Rather than solely depending on the outcome, we need to take into account the quality of the evidence, the size and spread of the effect and the relevance of the outcome.

•	The Lifecycle Issue: Each aspect of software engineering impacts the lifecycle of the product in such a way that it is difficult to isolate the individual effect caused by each aspect. Rather we see the effect as a whole. Almost every aspect is interrelated and co-dependent. 

As of right now, the most evident form of Evidence-Based Software Engineering are the anonymous surveys conducted by big companies like Google and various beta testing programs that are hosted by almost every company. This leads to data collection which helps shape the upcoming products and technologies.

## 6.	Conclusion
There are a lot of benefits to adopting Evidence-Based Software Engineering. In particular, the adoption and use of techniques supported by evidence should both improve the quality of software-intensive systems and reassure stakeholder groups that practitioners are using the best practices [1].
However, there are a number of problems associated with Evidence-Based Software Engineering. The inability of experiments to be detached from human users always results in experimenters bias. The quality of the evidence is not as substantial and significant as necessary. The lifecycle of software development is too complex and dependent on various co-dependent aspects. This makes it difficult to point of a single point of failure.
Overall, Evidence-Based Software Engineering is a fairly worthy goal for researchers, practitioners and stakeholders alike to invest their time and resources in. It is a high-risk, high-reward situation that will take major co-ordination, patience and dedication from all the practitioners, researchers, developers etc. from all over the world. If all researchers adopt evidence-based approach, systematic review and all practitioners use the initial (maybe not so successful) attempts at using Evidence-Based Software Engineering as a means to further approach viability of the evidence-based approach, the widespread adaptation of this is possible.

## 7.	References
[1] Kitchenham, B. A., Dyba, T., & Jorgensen Magne (2004). Evidence-based Software Engineering, Retrieved from ICSE’04 – IEEE Database

[2] COCHRANE, AL. In Chalmers I, Enkin M, Keirse MJNC, eds. Effective care in pregnancy and childbirth. Oxford University Press, Oxford, 1989.

[3] Sackett, D.L., Straus, S.E., Richardson, W.S., Rosenberg, W. and Haynes, R.B. Evidence-Based Medicine: How to practice and teach EBM, Second Edition, Churchill Livingstone: Edinburgh, 2000.

[4] Garousi, V., Fernandes, J.M. Quantity versus impact of software engineering papers: a quantitative study. Scientometrics 112, 963–1006 (2017). https://doi.org/10.1007/s11192-017-2419-6

[5] JASPERSON, JON (SEAN), BUTLER, BRIAN S., CARTE, TRACI, A., CROES, HENRY J.P., SAUNDERS, CAROL, S., AND ZHEMG, WEIJUN. Review: Power and Information Technology Research: A Metatriangulation Review. MIS Quarterly, 26(4): 397-459, December 2002.

[6] BERRY, D.M. AND TICHY, W.F. Comments on “Formal Methods Application: An Empirical Tale of Software Development”, IEEE Transactions on Software Engineering, 29(6):567-571, June 2003.

[7] SOBEL, A.E.K. AND CLARKSON, M.R. Response to “Comments on ‘Formal Methods Application: An Empirical Tale of Software Development’”, IEEE Transactions on Software Engineering, 29(6):572-575, June 2003.

[8] SOBEL, A.E.K. AND CLARKSON, M.R. Formal Methods Application: An Empirical Tale of Software Development, IEEE Transactions on Software Engineering, 28(3):157- 161, March 2002

[9] KITCHENHAM, B.A., PLEEGER, S.L., PICKARD, L., JONES, P., HOAGLIN, D., EL EMAM, K., AND ROSENBERG, J. Preliminary Guidelines for Empirical Research in Software Engineering, IEEE Transactions on Software Engineering, 28(8):721-734, 2002.

APPENDIX

1.	IEEE: Institute of Electrical and Electronics Engineers
2.	EBM: Evidence-Based Medicine
3.	EBSE: Evidence-Based Software Engineering
4.	Et al.: And Others
5.	ACM: Association for Computing Machinery
6.	SPICE: Software Process Improvement and Capability Determination

The various references come from IEEE Xplore, ACM Digital Library and various online websites.
