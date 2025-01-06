import visa from "../assets/americaVisa.jpg";

const BlogCard = () => {
  return (
    <div className="col-span-12 md:col-span-7">
      <img className="mb-4 w-full" src={visa} alt="american flag" />
      <div className="border-2 border-red-500 rounded-md p-2 text xl md:text-2xl font-playfair font-semibold">
        <h2>New Work Visa Requirements for 2025: What You Need to Know</h2>
      </div>
      <div>
        <p>
          <strong>The US has a new visa policy that targets certain individuals and
          their families in Bangladesh.</strong> The policy is meant to be a warning to
          officials of the Election Commission, and may also apply to activities
          leading up to election day. Some say the policy is like a ghost case
          police tactic, where the US implicates groups of people by filing
          cases against unknown persons.{" "}
        </p>
        <p>
          <strong>The policy may affect:</strong>
        </p>
        <strong>Individuals:</strong>
        <p>
          The policy targets individuals who want to send their children to US
          schools and universities, or who have assets in the US.{" "}
        </p>
        <strong>Family members: </strong>
        The policy may also apply to immediate family members of the targeted
        individuals.
        <strong>Bangladesh&apos;s image:</strong> The policy may negatively
        impact Bangladesh&apos;s image.
        <p>
          <strong>Visa applications to other countries:</strong>
        </p>{" "}
        Revoking US visas may impact visa applications to other countries
        <p><strong>For General public Visa:</strong> </p>
        <p>
          Travelers are advised to obtain a Bangladeshi visa in advance of their
          trip from the Bangladeshi Embassy or nearest consulate in the U.S. The
          visa is generally multiple entry with a validity of 1-5 years
          depending on your purpose of travel. The fee is $160 USD. You may also
          obtain a visa on arrival at the Hazrat Shahjalal International
          Airport. However, the issuance of this visa is a privilege not a right
          and is at the sole discretion of the Bangladeshi immigration officer.
          The fee for a visa on arrival is $50 USD (plus tax), payable in US
          dollars only. You do not need to bring a passport/visa photo for a
          visa on arrival. The visa on arrival is only valid for 15-30 days. A
          longer stay will require that you apply for an extension and this can
          be time consuming and is not guaranteed. Therefore, the Embassy
          strongly suggests that travelers obtain their visas in advance of
          their trips from their nearest Bangladeshi Embassy or consulate.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
