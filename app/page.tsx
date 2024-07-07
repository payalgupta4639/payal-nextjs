import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1 id="familiarization-exercise">Familiarization Exercise</h1>
          <ol>
            <li>
              From this list, rank your 5 most favourite and 5 least favourite
              support tasks. Provide a brief explanation for each.
            </li>
          </ol>
          <p>
            <strong>5 most favourite tasks are:</strong>
          </p>
          <ul>
            <li>
              <p>
                Create video tutorials to help teach users a specific feature or
                use case Creating video tutorials with clear visual instructions
                can help enhance user experience and reduce the number of
                support tickets. I like creating content such as writing
                technical documentation or creating videos to share knowledge
                and help the users explain how a particular service or feature
                works.{" "}
              </p>
            </li>
            <li>
              <p>
                Help train and onboard new support teammates Helping new hires
                and training them for long-term success is a critical task and a
                fulfilling one. It helps in sharing knowledge, fostering growth,
                and building a strong team. I have mentored a couple of new
                hires so far and it helps both the mentee and the mentor to grow
                personally as well as professionally.
              </p>
            </li>
            <li>
              <p>
                Work with the product team to develop a new feature based on
                feedback from customers This is a rewarding task. Working
                directly with the product team to build new features based on
                user feedback allows you to have an influence on product
                development and ensure that customer needs are met.{" "}
              </p>
            </li>
            <li>
              <p>
                Scheduling time-off coverage and collaborating as part of a
                growing cohesive support team It is about being a team player
                and being available when the team needs it which helps in
                fostering team bonding and trust between the team members that
                is crucial for the success of the team.
              </p>
            </li>
            <li>
              <p>
                Work with people to figure out if Vercel is suitable for their
                use case Helping our customers to understand if Vercel is
                suitable for their use case is engaging and impactful. It helps
                to gain more knowledge about the product through different
                use-cases, and get a chance to build a trust relationship with
                the customer which helps in the long-term.
              </p>
            </li>
          </ul>
          <p>
            <strong>5 least favourite support tasks</strong>
          </p>
          <ul>
            <li>
              <p>
                Respond to 25+ support cases via email everyday While I enjoy
                working hard and handling a high volume of cases, as a senior
                support engineer, I believe my focus should shift towards
                high-priority tasks like managing urgent or escalated tickets,
                mentoring, and collaborating with the product team. This would
                better utilize my skills and benefit the team more effectively.
                High-volume repetitive tasks may not significantly enhance my
                skills or knowledge.
              </p>
            </li>
            <li>
              <p>
                Help resolve billing issues for customers I believe billing
                issues can be complex and time-consuming to troubleshoot unless
                there is a bug in the product billing system. Generally, such
                issues should be directly handled by the respective team who
                manages the billing in order to have an effective communication
                with the customer and avoid any communication gap or delays.
              </p>
            </li>
            <li>
              <p>
                Run ticket review sessions to make sure tone is consistent I
                understand ensuring a consistent tone is an important part while
                working with the customer and it should be the support
                engineer’s responsibility to ensure that the tone is correct. If
                a team member has requested for a ticket review session, then I
                would be happy to help.
              </p>
            </li>
            <li>
              <p>
                Engage multiple users at once in a public discussion, to answer
                their questions and troubleshoot problems Managing multiple
                users at once in a public discussion can be stressful and
                overwhelming at times.
              </p>
            </li>
            <li>
              <p>
                Find and recruit teammates for the support team Finding and
                recruiting teammates for the support team can be a
                time-consuming and demanding process. However, if required,
                I&#39;d be happy to do it.
              </p>
            </li>
          </ul>
          <ol start="2">
            <li>
              <p>
                What do you want to learn or do more of at work? I want to grow
                myself both personally and professionally by working on more
                challenging issues, providing mentorship to new hires, and get
                critical feedback from the leadership to constantly upskilling
                myself.
              </p>
            </li>
            <li>
              <p>
                Describe how you solved a challenge or technical issue that you
                faced in a previous role &#40;preferably in a previous support
                role&#41;. How did you determine that your solution was
                successful?
              </p>
            </li>
          </ol>
          <p>
            <strong>Issue:</strong> Customer was able to setup Dremio Cloud and
            create the infrastructure in AWS however, they were unable to run
            any queries on AWS glue source in Dremio Cloud. No error message was
            showing up on the Dremio Cloud UI
          </p>
          <p>
            <strong>Troubleshooting Steps:</strong>
          </p>
          <ul>
            <li>Checked error logs from our internal monitoring tool</li>
            <li>
              Found sts connection timeout error messages which indicated
              network connection issue between the dremio cloud control plane
              and the dataplane where customer deployed the compute resources to
              run queries
            </li>
            <li>
              Possible root causes of this issue are misconfigured network
              resources such security group, NAT gateway &#40;if the ec2
              instance is in private subnet&#41;, etc.
            </li>
            <li>
              Scheduled a call with the customer to check their AWS
              configuration
            </li>
            <li>
              Customer was using the public subnet. Checked all the network
              settings such as internet gateway, security group rules for the
              ec2 instances, checked outbound connectivity using the curl
              command, etc.
            </li>
            <li>
              Tried to run queries on other sample sources in dremio cloud such
              as S3 to narrow down the issue and confirm if it is specific to
              Glue source or all types of sources
            </li>
            <li>
              Then, checked the ec2 instance details and found that the ec2
              instance which were spinning up by dremio cloud did not have the
              public IP associated with them due to which dremio cloud control
              plane was not able to establish communication with them and the
              connection was getting timed out
            </li>
          </ul>
          <p>
            <strong>Root Cause:</strong>
            Issue occurred because ec2 instances did not have the public IPs
            associated with them due to which the network connection between
            data plane and dremio cloud control plane was getting timed out.
          </p>
          <p>
            <strong>Resolution:</strong>
          </p>
          <ul>
            <li>
              Either attach an elastic IP to the already created ec2 instances
              to establish the connection
            </li>
            <li>
              Or edit the subnet settings to enable auto-assign public IP option
              and launch a new ec2 instance which should have a public IP
              already associated with it
            </li>
          </ul>
          <p>
            After editing the subnet settings and enabling auto-assign public IP
            for the ec2 instance, the query worked!
          </p>
          <ol start="4">
            <li>
              When would you choose to use Edge Functions, Serverless Functions,
              or Edge Middleware with Vercel?
            </li>
          </ol>
          <p>
            I would choose Edge functions to serve requests by the users with
            ultra-low latency as edge function run closer to the user, reducing
            response times. I would choose Serverless Functions to run the
            backend logic where ultra-low latency is not required for example
            interacting with the databases I would choose Edge Middleware for
            request/response manipulation to intercept and modify requests and
            responses. For example, redirecting URLs
          </p>
          <ol start="5">
            <li>
              Imagine a customer writes in requesting help with a build issue on
              a framework or technology that you&#39;ve not seen before. How
              would you begin troubleshooting this and what questions would you
              ask the customer to understand the situation better?
            </li>
          </ol>
          <p>
            I would first acknowledge their concern and assure them that I’m
            here to help. Then, I would ask the below questions to start with
            and understand the issue better:
          </p>
          <ul>
            <li>What framework or technology are they using?</li>
            <li>What is the version of that framework?</li>
            <li>Are there any tools or dependencies that they are using?</li>
            <li>
              Request to elaborate a bit more on the build issue they are facing
              such as when exactly it happened, what is the error message coming
              in, is it consistent or intermittent?
            </li>
            <li>
              Share the logs, if any, from the time period when error occurred
            </li>
            <li>
              Share the steps that they are taking to initiate the build process
            </li>
            <li>
              Are they trying to build it locally or on any other platform? Is
              this issue specific to that particular environment?
            </li>
          </ul>
          <ol start="6">
            <li>
              The customer from question 5 replies to your response with the
              below: “I’m so frustrated. I’ve been trying to make this work for
              hours and I just can’t figure it out. It must be a platform issue
              so just fix it for me instead of asking me questions.” Please
              write a follow-up reply to the customer.
              <pre className="">
                <code className="">
                  Hi [Customer Name],
                  <br />
                </code>
              </pre>
            </li>
          </ol>
          <p>
            I&#39;m really sorry to hear about your frustration. I completely
            understand how tough it can be when things aren&#39;t working as
            expected, especially after spending so much time on it. I want to
            help you as efficiently as possible.
          </p>
          <p>
            If you can provide me with just a few key details, I&#39;ll be able
            to pinpoint the issue and get it fixed for you:
          </p>
          <ol>
            <li>The version of framework or technology you are using.</li>
            <li>The exact error messages or logs you are seeing </li>
            <li>
              The command or steps you are using to start the build process.
            </li>
          </ol>
          <p>
            These details will enable me to understand the problem better and
            provide a precise solution quickly.
          </p>
          <p>
            Thank you for your patience, and I&#39;m here to support you through
            this. We&#39;ll get it sorted out together.
          </p>
          <p>Best regards, Payal</p>

          <pre className="">
            <code className="">
              <br />
              7. A customer writes in to the Helpdesk asking "How do I do a
              redirect from the /blog path to https://example.com?" Please write
              a reply to the customer. Feel free to add any information about
              your decision making process after the reply.
            </code>
          </pre>
          <p>Hi [Customer Name], </p>
          <p>
            I understand that you would like to set up a redirect from the{" "}
            <code>/blog</code> path to <code>https://example.com</code>. You can
            implement this using various methods depending on your server
            environment.{" "}
          </p>
          <p>Here’s a general approach using Nginx server configurations: </p>
          <p>
            If you&#39;re using Nginx as your web server, you can add a redirect
            rule in your Nginx configuration file &#40;<code>nginx.conf</code>{" "}
            or a specific site configuration file&#41;:{" "}
          </p>
          <ol>
            <li>Open your Nginx configuration file for editing. </li>
            <li>
              Add the following <code>location</code> block inside your server
              block: &#123; ... location /blog &#123; return 301{" "}
              <a href="https://example.com">https://example.com</a>; &#125; ...
              &#125;
            </li>
            <li>
              Save the configuration file and reload Nginx for changes to take
              effect .
            </li>
          </ol>
          <p>
            Hope that helps. Please feel free to reach out if you need any
            further assistance.
          </p>
          <p>Thanks, Payal</p>

          <pre className="">
            <code className="">
              <br />
              8. A customer is creating a site and would like their project not
              to be indexed by search engines. Please write a reply to the
              customer. Feel free to add any information about your decision
              making process after the reply.
            </code>
          </pre>
          <p>Hi [customer-name],</p>
          <p>Greetings from Vercel!</p>
          <p>
            I understand you are creating a website and would like us to help
            you with ensuring that your project is not being indexed by the
            search engines. Please correct me if I misunderstood your concern.
          </p>
          <p>
            You can achieve this by adding the below HTML meta tags to your
            project’s HTML pages which will help prevent it from indexing
            <meta name="robots" content="noindex, nofollow" />
          </p>
          <p>
            Please let me know if you face any issues. Would be happy to assist.
          </p>
          <p>Thanks, Payal</p>

          <pre className="">
            <code className="">
              <br />
              9. What do you think is one of the most common problems which
              customers ask Vercel for help with? How would you help customers
              to overcome common problems, short-term and long-term?
              <br />
              <br />
              Some common issues which customers might be asking Vercel to help
              with are:
              <br />- Build failures
              <br />- Dependencies issues
              <br />- Signup issues <br />
              <br />I would create macros or templates for such common problems
              to share with the customers and help them resolve the issues at
              the earliest as a short term solution. <br />
              For long-term, I would suggest creating detailed documentation or
              short videos on how to resolve these common problems in order to
              reduce the ticket volume and assist our customers best.
              <br />
              <br />
              10. How could we improve or alter this familiarisation exercise?
              <br />
              <br />
              Sorry, time is up. Couldn't think of anything better. Thanks.
            </code>
          </pre>
      </div>
    </main>
  );
}
