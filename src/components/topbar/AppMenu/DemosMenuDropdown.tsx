import { getActiveClass } from '@/helpers/menu'
import type { MenuItemType } from '@/types/menu'
import { splitArray } from '@/utils/array'
import Link from 'next/link'
import { Col, Dropdown, DropdownToggle, Row } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa6'

type DemosMenuDropdownProps = {
  menuItems: MenuItemType[]
  activeMenuItems: string[]
}

const DemosMenuDropdown = ({ menuItems, activeMenuItems }: DemosMenuDropdownProps) => {
  const splitMenuitems = splitArray(menuItems, 7)
  return (
    <Dropdown className="nav-item">
      <DropdownToggle
        as={Link}
        href=""
        variant="link"
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${getActiveClass(activeMenuItems, 'demos')}`}
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
        aria-haspopup="true">
        Demos
        <FaAngleDown size={12} className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu dropdown-menu-size-lg p-3">
        <Row className="pt-2">
          {splitMenuitems.map((chunk, idx) => (
            <Col sm={6} key={idx}>
              <ul className="list-unstyled">
                {chunk.map((item) => (
                  <li key={item.key}>
                    <Link href={item.url ?? ''} target={item.target} className={`dropdown-item${getActiveClass(activeMenuItems, item.key)}`}>
                      {item.label}
                      {item.badge && <span className="badge text-bg-success ms-2">{item.badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          <Col xs={12}>
            <hr className="mt-2" />
            <div className="d-sm-flex justify-content-between align-items-center px-2">
              <div className="me-3 mb-2 mb-sm-0">
                <h6 className="mb-2 mb-sm-0">Ready to get started?</h6>
                <small className="mb-0">Take your documents to the next level with Mizzle</small>
              </div>
              <Link href="" className="btn btn-sm btn-primary">
                Get in touch
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Dropdown>
  )
}

export default DemosMenuDropdown
