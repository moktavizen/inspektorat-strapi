function WebLink({ link }) {
  const { attributes } = link;
  const { linkName, linkValue } = attributes;
  return (
    <li>
      <a href={linkValue} target="blank" className="hover:text-primary">
        {linkName}
      </a>
    </li>
  );
}

export default WebLink;
