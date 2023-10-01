import DataTableStaffs from "../components/DataTableStaffs";
import OrgFunction from "../components/OrgFunction";
import OrgStructure from "../components/OrgStructure";
import OrgVision from "../components/OrgVision";

function AboutPage({ profile, staffs }) {
  return (
    <div className="bg-gray-50">
      <DataTableStaffs data={staffs.data} />
      <OrgStructure profile={profile} />
      <OrgVision profile={profile} />
      <OrgFunction profile={profile} />
    </div>
  );
}

export default AboutPage;
