import { Source_Code_Pro } from 'next/font/google';

import styles from "./SectionHeader.module.css";
import { classes } from '@/tools';

const SourceCodePro = Source_Code_Pro({ weight: '400', subsets: ['latin'] })

const SectionHeader: React.FC<{children: React.ReactNode}> = ({ children }) => <h2 className={classes(styles['section-header'], SourceCodePro.className)}>{children}</h2>;

export default SectionHeader;